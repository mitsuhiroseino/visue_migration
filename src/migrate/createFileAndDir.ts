import fs from 'fs-extra';
import finishDynamicValue from '../utils/finishDynamicValue';
import { ReplacePlaceholdersOptions } from '../utils/replacePlaceholders';
import { DEFAULT_TEXT_ENCODING } from './constants';
import createDir from './createDir';
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
    return await createDir(inputPath, outputPath, config, params);
  } else if (stat.isFile()) {
    // ファイルの場合は、ファイルを読み込みcreateFileを実行した結果のPromiseを返す
    return await createFile(inputPath, outputPath, config, params);
  }
}
