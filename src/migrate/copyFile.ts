import fs from 'fs-extra';
import path from 'path';
import applyIf from '../utils/applyIf';
import isMatch from '../utils/isMatch';
import { MIGRATION_ITEM_STATUS } from './constants';
import setSystemParams from './helpers/setSystemParams';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

/**
 * ファイルをコピーする
 * @param inputPath コピー元のパス
 * @param outputPath コピー先のパス
 * @param config 設定
 * @param params 繰り返し処理毎のパラメーター
 * @param ensured 親ディレクトリが作成済みか
 * @returns 処理結果
 */
export default async function copyFile(
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

    // 出力先の確保
    if (!ensured) {
      const parentPath = path.dirname(outputPath);
      await fs.ensureDir(parentPath);
    }
    // ファイルのコピー
    await fs.copyFile(inputPath, outputPath);
    result.status = MIGRATION_ITEM_STATUS.COPIED;

    applyIf(onFileEnd, [result, config, newParams]);
  } else {
    result.status = MIGRATION_ITEM_STATUS.SKIPPED;
  }

  return result;
}
