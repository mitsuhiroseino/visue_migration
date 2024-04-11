import Encoding from 'encoding-japanese';
import fs from 'fs-extra';
import path from 'path';
import { CONTENT_TYPE } from '../operate';
import applyIf from '../utils/applyIf';
import { MIGRATION_ITEM_STATUS } from './constants';
import deleteParams from './helpers/deleteParams';
import finishParams from './helpers/finishParams';
import operateContent from './operateContent';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

export default async function processFile(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
): Promise<MigrationIterationResult> {
  const { onFileStart, onFileEnd } = config;
  applyIf(onFileStart, [config, params]);
  let result: MigrationIterationResult = {
    itemType: 'file',
    inputPath,
    outputPath,
    status: MIGRATION_ITEM_STATUS.PENDING,
  };
  let processedParams = params;

  if (config.copy) {
    // ファイルのコピーのみで済む場合
    if (outputPath != null) {
      // 出力先あり
      const parentPath = path.dirname(outputPath);
      await fs.ensureDir(parentPath);
      // 単純コピー
      await fs.copyFile(inputPath, outputPath);
      result.status = MIGRATION_ITEM_STATUS.COPIED;
    } else {
      // 出力先なし
      console.warn('output does not exist.', JSON.stringify({ inputPath, outputPath }));
      result.status = MIGRATION_ITEM_STATUS.NONE;
    }
  } else {
    // ファイル内の変換が必要な場合
    const { binary, inputEncoding, outputEncoding } = config;
    // ファイルの入力
    const buffer = await fs.readFile(inputPath);
    let encoding: any;
    if (binary) {
      encoding = 'BINARY';
    } else {
      encoding = Encoding.detect(buffer);
    }
    let content;
    let contentType;
    let writeFileOptions;
    if (!encoding || encoding === 'BINARY') {
      // バイナリファイルの場合
      content = buffer;
      contentType = CONTENT_TYPE.BINARY;
    } else {
      // テキストファイルの場合
      content = buffer.toString(inputEncoding || encoding);
      contentType = CONTENT_TYPE.TEXT;
      writeFileOptions = { encoding: outputEncoding || encoding };
    }
    // コンテンツの操作
    const systemParams = { inputPath, outputPath, contentType, content };
    finishParams(params, systemParams);
    content = await operateContent(content, config, params);
    if (outputPath != null) {
      // ファイルの出力
      const parentPath = path.dirname(outputPath);
      await fs.ensureDir(parentPath);
      await fs.writeFile(outputPath, content, writeFileOptions);
      result.status = MIGRATION_ITEM_STATUS.CONVERTED;
      // onFileEnd用に別インスタンスを作る
      processedParams = { ...params };
      deleteParams(params, systemParams);
    } else {
      result.status = MIGRATION_ITEM_STATUS.PROCESSED;
    }
  }

  applyIf(onFileEnd, [result, config, processedParams]);
  return result;
}
