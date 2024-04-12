import fs from 'fs-extra';
import applyIf from '../utils/applyIf';
import finishDynamicValue from '../utils/finishDynamicValue';
import isMatch from '../utils/isMatch';
import { DEFAULT_TEXT_ENCODING, MIGRATION_ITEM_STATUS } from './constants';
import createFileFromContent from './createFileFromContent';
import setSystemParams from './helpers/setSystemParams';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

/**
 * テンプレートファイルからファイルを作成する
 * @param inputPath テンプレートのパス
 * @param outputPath 出力先のパス
 * @param config 設定
 * @param params 繰り返し処理毎のパラメーター
 * @param ensured 親ディレクトリが作成済みか
 * @returns 処理結果
 */
export default async function createFile(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
  ensured?: boolean,
): Promise<MigrationIterationResult> {
  const itemType = 'file';
  const newParams = setSystemParams(params, { itemType, inputPath, outputPath });
  const { onFileStart, onFileEnd, filter, ...rest } = config;
  let result: MigrationIterationResult = {
    itemType,
    inputPath,
    outputPath,
    status: MIGRATION_ITEM_STATUS.PENDING,
  };

  const processTarget = isMatch(inputPath, filter, newParams);
  if (processTarget) {
    applyIf(onFileStart, [config, newParams]);

    // テンプレートの読み込み
    const template = await fs.readFile(inputPath, { encoding: config.inputEncoding || DEFAULT_TEXT_ENCODING });
    const content: string = finishDynamicValue(template, newParams, config);
    const contentResult = await createFileFromContent(content, outputPath, rest, newParams, ensured);
    result = { ...result, ...contentResult };

    applyIf(onFileEnd, [result, config, newParams]);
  } else {
    result.status = MIGRATION_ITEM_STATUS.SKIPPED;
  }

  return result;
}
