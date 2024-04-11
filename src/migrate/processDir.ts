import fs from 'fs-extra';
import path from 'path';
import applyIf from '../utils/applyIf';
import replaceWithConfigs from '../utils/replaceWithConfigs';
import { MIGRATION_ITEM_STATUS } from './constants';
import deleteParams from './helpers/deleteParams';
import finishParams from './helpers/finishParams';
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
export default async function processDir(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
  level: number,
): Promise<MigrationIterationResult> {
  const { ignoreSubDir } = config;
  if (!ignoreSubDir || level === 0) {
    // ディレクトリの場合
    const { onDirStart, onDirEnd } = config;
    applyIf(onDirStart, [config, params]);
    const result: MigrationIterationResult = {
      itemType: 'dir',
      inputPath,
      outputPath,
      status: MIGRATION_ITEM_STATUS.PENDING,
    };

    if (config.copy) {
      // コピーだけで済む場合
      if (outputPath != null) {
        if (ignoreSubDir) {
          // 対象のフォルダ直下のファイルのみコピー
          await fs.ensureDir(outputPath);
          const items = await fs.readdir(inputPath, { withFileTypes: true });
          const promises = [];
          for (const item of items) {
            if (item.isFile()) {
              promises.push(
                fs.copy(path.join(inputPath, item.name), path.join(outputPath, item.name), { overwrite: true }),
              );
            }
          }
          await Promise.all(promises);
        } else {
          // サブフォルダも含めてコピー
          await fs.copy(inputPath, outputPath, { overwrite: true });
        }
        result.status = MIGRATION_ITEM_STATUS.COPIED;
      } else {
        // 出力先なし
        console.warn('output does not exist.', JSON.stringify({ inputPath, outputPath }));
        result.status = MIGRATION_ITEM_STATUS.NONE;
      }
    } else {
      // テキストファイルの変換が必要な場合
      if (outputPath != null) {
        await fs.ensureDir(outputPath);
      }
      const { itemName } = config;

      const items = await fs.readdir(inputPath);
      const promises = [];
      for (const item of items) {
        const inputItemPath = path.join(inputPath, item);

        const systemParams = { inputItemPath, inputItem: item };
        finishParams(params, systemParams);
        let outputItem;
        if (itemName) {
          outputItem = replaceWithConfigs(item, itemName, params);
        } else {
          outputItem = item;
        }

        const stat = await fs.stat(inputItemPath);
        const process = stat.isDirectory() ? processDir : processFile;

        const outputItemPath = outputPath != null ? path.join(outputPath, outputItem) : null;
        promises.push(process(inputItemPath, outputItemPath, config, params, level + 1));
        deleteParams(params, systemParams);
      }

      await Promise.all(promises);
      result.status = MIGRATION_ITEM_STATUS.CONVERTED;
    }

    applyIf(onDirEnd, [result, config, params]);
    return result;
  }
}
