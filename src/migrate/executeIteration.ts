import fs from 'fs-extra';

import applyIf from '../utils/applyIf';
import getFinishedString from '../utils/getFinishedString';
import isMatch from '../utils/isMatch';
import { MIGRATION_ITEM_STATUS } from './constants';
import createFile from './createFile';
import createFileAndDir from './createFileAndDir';
import finishParams from './helpers/finishParams';
import processFileAndDir from './processFileAndDir';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

/**
 * 繰り返し処理1回文の処理を行う
 * @param config 移行対象の設定
 * @param params 繰り返し毎のパラメーター
 */
export default async function executeIteration(
  config: MigrationJobConfig,
  params: IterationParams
): Promise<MigrationIterationResult | null> {
  const {
      inputPath,
      outputPath,
      template,
      templatePath,
      replacementBracket,
      forceOutput,
      onIterationStart,
      onIterationEnd,
      filter,
    } = config,
    replacementOptions = { replacementBracket, forceOutput };

  applyIf(onIterationStart, [config, params]);

  let result: MigrationIterationResult = null;
  if (outputPath != null && inputPath == null && template == null && templatePath == null) {
    // 出力があるのに入力元が存在しない場合
    const outputFilePath = await getFinishedString(outputPath, params, replacementOptions);
    result = { inputPath: null, outputPath: outputFilePath, status: MIGRATION_ITEM_STATUS.NONE };
    console.warn('input does not exist.', JSON.stringify({ inputPath, template, templatePath, outputPath }));
  } else {
    // 対象が存在する場合
    const outputFilePath = await getFinishedString(outputPath, params, replacementOptions);
    let finishedParams = finishParams(params, { outputPath: outputFilePath });
    if (template != null) {
      // ファイルを作成
      const content = await getFinishedString(template, finishedParams, replacementOptions);
      // テンプレートの場合は事前フォーマットをoffにする
      const cfgs = { ...config, preFormatting: false };
      result = await createFile(content, outputFilePath, cfgs, finishedParams);
    } else if (templatePath != null) {
      // テンプレートファイルを読み込んで生成
      const tplPath = await getFinishedString(templatePath, finishedParams, replacementOptions);
      finishedParams = finishParams(finishedParams, { inputPath: tplPath });
      const availablePath = await fs.exists(tplPath);
      if (availablePath) {
        // テンプレートの場合は事前フォーマットをoffにする
        const cfgs = { ...config, preFormatting: false };
        result = await createFileAndDir(tplPath, outputFilePath, cfgs, finishedParams);
      } else {
        // 処理対象なし
        result = { inputPath: tplPath, outputPath: outputFilePath, status: MIGRATION_ITEM_STATUS.NONE };
        console.warn(`"${tplPath}" does not exist.`);
      }
    } else if (inputPath != null) {
      // 移行元のファイルをコピー
      const inputFilePath = await getFinishedString(inputPath, finishedParams, replacementOptions);
      finishedParams = finishParams(finishedParams, { inputPath: inputFilePath });
      // 除外対象か
      const shouldProcess = await isMatch(inputFilePath, filter, finishedParams);
      if (shouldProcess) {
        // 処理対象
        const availablePath = await fs.exists(inputFilePath);
        if (availablePath) {
          // ファイルを移行
          result = await processFileAndDir(inputFilePath, outputFilePath, config, finishedParams);
        } else {
          // 処理対象なし
          result = { inputPath: inputFilePath, outputPath: outputFilePath, status: MIGRATION_ITEM_STATUS.NONE };
          console.warn(`"${inputFilePath}" does not exist.`);
        }
      } else {
        // 処理対象外
        result = { inputPath: inputFilePath, outputPath: outputFilePath, status: MIGRATION_ITEM_STATUS.SKIPPED };
      }
    }
  }
  applyIf(onIterationEnd, [result, config, params]);
  return result;
}
