import Encoding from 'encoding-japanese';
import fs from 'fs-extra';
import path from 'path';
import { CONTENT_TYPE } from '../operate';
import { MIGRATION_ITEM_STATUS } from './constants';
import finishParams from './helpers/finishParams';
import operateContent from './operateContent';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

export default async function processFile(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams
): Promise<MigrationIterationResult> {
  if (config.copy) {
    // ファイルのコピーのみで済む場合
    const parentPath = path.dirname(outputPath);
    await fs.ensureDir(parentPath);
    // 単純コピー
    await fs.copyFile(inputPath, outputPath);
    return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.COPIED };
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
    content = await operateContent(
      content,
      config,
      finishParams(params, { inputPath, outputPath, contentType, content })
    );
    // ファイルの出力
    const parentPath = path.dirname(outputPath);
    await fs.ensureDir(parentPath);
    await fs.writeFile(outputPath, content, writeFileOptions);
    return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.CONVERTED };
  }
}
