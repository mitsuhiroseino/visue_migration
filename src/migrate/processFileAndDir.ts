import fs from 'fs-extra';
import path from 'path';
import applyIf from '../utils/applyIf';
import replaceWithConfigs from '../utils/replaceWithConfigs';
import { MIGRATION_ITEM_STATUS } from './constants';
import finishParams from './helpers/finishParams';
import processDir from './processDir';
import processFile from './processFile';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

/**
 * 対象の移行を行う
 * @param inputPath 移行元のパス
 * @param outputPath 移行先のパス
 * @param config 移行の設定
 * @param params 繰り返し処理のパラメーター
 * @param options オプション
 * @returns
 */
export default async function processFileAndDir(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
  _level = 0,
): Promise<MigrationIterationResult> {
  const stat = await fs.stat(inputPath);
  if (stat.isDirectory()) {
    // ディレクトリの場合
    return await processDir(inputPath, outputPath, config, params, _level);
  } else if (stat.isFile()) {
    // ファイルの場合
    return await processFile(inputPath, outputPath, config, params);
  }
}
