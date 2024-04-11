import fs from 'fs-extra';
import path from 'path';
import applyIf from '../utils/applyIf';
import { ReplacePlaceholdersOptions } from '../utils/replacePlaceholders';
import replaceWithConfigs from '../utils/replaceWithConfigs';
import { MIGRATION_ITEM_STATUS } from './constants';
import createFile from './createFile';
import deleteParams from './helpers/deleteParams';
import finishParams from './helpers/finishParams';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

export type CreateFileOptions = ReplacePlaceholdersOptions;

/**
 * input配下のファイルをテンプレートとしてoutput配下に出力する
 * @param inputPath 入力元ファイルorディレクトリのパス
 * @param outputPath 出力先ファイルorディレクトリのパス
 * @param config 設定
 * @param params 繰り返し処理毎のパラメーター
 * @param generate 生成の場合にtrue
 * @returns 処理結果
 */
export default async function createDir(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
): Promise<MigrationIterationResult> {
  // ディレクトリの場合は配下のファイル・ディレクトリを順次処理
  const { onDirStart, onDirEnd, itemName } = config;
  applyIf(onDirStart, [config, params]);

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
    const outputItemPath = outputPath != null ? path.join(outputPath, outputItem) : null;

    const stat = await fs.stat(inputItemPath);
    const create = stat.isDirectory() ? createDir : createFile;

    promises.push(create(inputItemPath, outputItemPath, config, params));
    deleteParams(params, systemParams);
  }

  await Promise.all(promises);
  const result: MigrationIterationResult = {
    itemType: 'dir',
    inputPath,
    outputPath,
    status: MIGRATION_ITEM_STATUS.CREATED,
  };

  applyIf(onDirEnd, [result, config, params]);
  return result;
}
