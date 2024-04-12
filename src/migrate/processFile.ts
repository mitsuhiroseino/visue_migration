import Encoding from 'encoding-japanese';
import fs from 'fs-extra';
import { CONTENT_TYPE } from '../operate';
import applyIf from '../utils/applyIf';
import isMatch from '../utils/isMatch';
import writeAnyFile from '../utils/writeAnyFile';
import { MIGRATION_ITEM_STATUS } from './constants';
import setSystemParams from './helpers/setSystemParams';
import operateContent from './operateContent';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

/**
 * ファイルを移行する
 * @param inputPath 移行元のパス
 * @param outputPath 移行先のパス
 * @param config 設定
 * @param params 繰り返し処理毎のパラメーター
 * @param ensured 親ディレクトリが作成済みか
 * @returns 処理結果
 */
export default async function processFile(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
  ensured?: boolean,
): Promise<MigrationIterationResult> {
  const itemType = 'file';
  let newParams = setSystemParams(params, { itemType, inputPath, outputPath });
  const { onFileStart, onFileEnd, filter } = config;

  let result: MigrationIterationResult = {
    itemType,
    inputPath,
    outputPath,
    status: MIGRATION_ITEM_STATUS.PENDING,
  };

  const processTarget = isMatch(inputPath, filter, newParams);
  if (processTarget) {
    applyIf(onFileStart, [config, newParams]);
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
    if (!encoding || encoding === 'BINARY') {
      // バイナリファイルの場合
      content = buffer;
      contentType = CONTENT_TYPE.BINARY;
    } else {
      // テキストファイルの場合
      content = buffer.toString(inputEncoding || encoding);
      contentType = CONTENT_TYPE.TEXT;
    }
    // コンテンツの操作
    newParams = setSystemParams(newParams, { contentType, content });
    content = await operateContent(content, config, newParams);

    if (outputPath != null) {
      // ファイルの出力あり
      await writeAnyFile(outputPath, content, {
        ensured,
        spaces: 2,
        encoding: outputEncoding || encoding,
      });
      result.status = MIGRATION_ITEM_STATUS.CONVERTED;
    } else {
      // ファイルの出力なし
      result.status = MIGRATION_ITEM_STATUS.PROCESSED;
    }

    applyIf(onFileEnd, [result, config, newParams]);
  } else {
    result.status = MIGRATION_ITEM_STATUS.SKIPPED;
  }
  return result;
}
