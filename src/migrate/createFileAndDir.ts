import fs from 'fs-extra';
import path from 'path';

import getFinishedString from '../utils/getFinishedString';
import { ReplaceByValuesOptions } from '../utils/replaceByValues';
import { MIGRATION_ITEM_STATUS } from './constants';
import createFile from './createFile';
import finshParams from './helpers/finshParams';
import { IterationParams, MigrationIterationResult, MigrationTargetConfig } from './types';

export type CreateFileOptions = ReplaceByValuesOptions;

/**
 * input配下のファイルをテンプレートとしてoutput配下に出力する
 * @param inputPath 入力元ファイルorディレクトリのパス
 * @param outputPath 出力先ファイルorディレクトリのパス
 * @param config 設定
 * @param params 繰り返し処理毎のパラメーター
 * @returns 処理結果
 */
export default async function createFileAndDir(
  inputPath: string,
  outputPath: string,
  config: MigrationTargetConfig,
  params: IterationParams
): Promise<MigrationIterationResult> {
  const stat = await fs.stat(inputPath);
  if (stat.isDirectory()) {
    // ディレクトリの場合は配下のファイル・ディレクトリを順次処理
    const items = await fs.readdir(inputPath, { withFileTypes: true });
    const promises = [];
    for (const item of items) {
      promises.push(createFileAndDir(path.join(inputPath, item.name), path.join(outputPath, item.name), config, params));
    }
    await Promise.all(promises);
    return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.CREATED };
  } else if (stat.isFile()) {
    // ファイルの場合は、ファイルを読み込みcreateFileを実行した結果のPromiseを返す
    const template = await fs.readFile(inputPath, { encoding: config.inputEncoding });
    const finishedParams = finshParams(params, { inputPath, outputPath });
    const content = await getFinishedString(template, finishedParams, config);
    const result = await createFile(content, outputPath, config, finishedParams);
    return { ...result, inputPath };
  }
}
