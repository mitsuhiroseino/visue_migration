import fs from 'fs-extra';
import applyIf from '../utils/applyIf';
import finishDynamicValue from '../utils/finishDynamicValue';
import { DEFAULT_TEXT_ENCODING } from './constants';
import createFileFromContent from './createFileFromContent';
import deleteParams from './helpers/deleteParams';
import finishParams from './helpers/finishParams';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

/**
 * 任意のコンテンツからファイルを作成する
 * @param content ファイルの内容
 * @param outputPath 出力先ファイルのパス
 * @param config 設定
 * @param params 繰り返し処理毎のパラメーター
 * @returns 処理結果
 */
export default async function createFile(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
): Promise<MigrationIterationResult> {
  const { onFileStart, onFileEnd, ...rest } = config;
  applyIf(onFileStart, [config, params]);

  const template = await fs.readFile(inputPath, { encoding: config.inputEncoding || DEFAULT_TEXT_ENCODING });
  const systemParams = { inputPath, outputPath };
  finishParams(params, systemParams);
  const content: string = finishDynamicValue(template, params, config);
  const res = await createFileFromContent(content, outputPath, rest, params);
  const result = { ...res, inputPath };

  applyIf(onFileEnd, [result, config, { ...params }]);
  deleteParams(params, systemParams);
  return result;
}
