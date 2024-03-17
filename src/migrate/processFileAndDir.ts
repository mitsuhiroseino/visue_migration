import fs from 'fs-extra';
import path from 'path';

import { MIGRATION_ITEM_STATUS } from './constants';
import isCopyOnly from './helpers/isCopyOnly';
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
  _level = 0
): Promise<MigrationIterationResult> {
  const { ignoreSubDir } = config;
  const stat = await fs.stat(inputPath);
  if (stat.isDirectory() && (!ignoreSubDir || _level === 0)) {
    // ディレクトリの場合
    if (isCopyOnly(config)) {
      // コピーだけで済む場合
      if (ignoreSubDir) {
        // 対象のフォルダ直下のファイルのみコピー
        await fs.ensureDir(outputPath);
        const items = await fs.readdir(inputPath, { withFileTypes: true });
        const promises = [];
        for (const item of items) {
          if (item.isFile()) {
            promises.push(fs.copy(path.join(inputPath, item.name), path.join(outputPath, item.name), { overwrite: true }));
          }
        }
        await Promise.all(promises);
      } else {
        // サブフォルダも含めてコピー
        await fs.copy(inputPath, outputPath, { overwrite: true });
      }
      return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.COPIED };
    } else {
      // テキストファイルの変換が必要な場合
      await fs.ensureDir(outputPath);
      const items = await fs.readdir(inputPath);
      await Promise.all(
        items.map((item) => {
          const inputItemPath = path.join(inputPath, item);
          const outputItemPath = path.join(outputPath, item);
          return processFileAndDir(inputItemPath, outputItemPath, config, params, _level + 1);
        })
      );
      return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.CONVERTED };
    }
  } else if (stat.isFile()) {
    // ファイルの場合
    return await processFile(inputPath, outputPath, config, params);
  }
}
