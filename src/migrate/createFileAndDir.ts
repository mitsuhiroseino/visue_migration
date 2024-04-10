import fs from 'fs-extra';
import path from 'path';
import finishDynamicValue from '../utils/finishDynamicValue';
import { ReplacePlaceholdersOptions } from '../utils/replacePlaceholders';
import replaceWithConfigs from '../utils/replaceWithConfigs';
import { DEFAULT_TEXT_ENCODING, MIGRATION_ITEM_STATUS } from './constants';
import createFile from './createFile';
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
export default async function createFileAndDir(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
): Promise<MigrationIterationResult> {
  const stat = await fs.stat(inputPath);
  if (stat.isDirectory()) {
    // ディレクトリの場合は配下のファイル・ディレクトリを順次処理
    const items = await fs.readdir(inputPath);
    const promises = [];
    const { itemName } = config;
    for (const item of items) {
      const inputItemPath = path.join(inputPath, item);
      // テンプレートから生成する場合はパスの置換があるかも
      let outputItem;
      if (itemName) {
        outputItem = replaceWithConfigs(item, itemName, finishParams(params, { inputItemPath, inputItem: item }));
      } else {
        outputItem = item;
      }
      const outputItemPath = outputPath != null ? path.join(outputPath, outputItem) : null;
      promises.push(createFileAndDir(inputItemPath, outputItemPath, config, params));
    }
    await Promise.all(promises);
    return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.CREATED };
  } else if (stat.isFile()) {
    // ファイルの場合は、ファイルを読み込みcreateFileを実行した結果のPromiseを返す
    const template = await fs.readFile(inputPath, { encoding: config.inputEncoding || DEFAULT_TEXT_ENCODING });
    const finishedParams = finishParams(params, { inputPath, outputPath });
    const content: string = finishDynamicValue(template, finishedParams, config);
    const result = await createFile(content, outputPath, config, finishedParams);
    return { ...result, inputPath };
  }
}
