import applyIf from '../utils/applyIf';
import isMatch from '../utils/isMatch';
import writeAnyFile from '../utils/writeAnyFile';
import { MIGRATION_ITEM_STATUS } from './constants';
import operateContent from './operateContent';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

/**
 * 入力の無い処理
 * @param outputPath 出力先のパス
 * @param config 設定
 * @param params 繰り返し処理毎のパラメーター
 * @returns 処理結果
 */
export default async function processNull(
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
  ensured?: boolean,
): Promise<MigrationIterationResult> {
  const { onFileStart, onFileEnd, filter, outputEncoding } = config;
  const result: MigrationIterationResult = {
    status: MIGRATION_ITEM_STATUS.PENDING,
  };

  const processTarget = isMatch(null, filter, params);
  if (processTarget) {
    applyIf(onFileStart, [config, params]);

    let result: MigrationIterationResult = {
      status: MIGRATION_ITEM_STATUS.PENDING,
    };

    const content = await operateContent(null, config, params);

    if (outputPath != null) {
      // ファイルの出力あり
      await writeAnyFile(outputPath, content, {
        ensured,
        encoding: outputEncoding,
        spaces: 2,
      });
      result.status = MIGRATION_ITEM_STATUS.CREATED;
    } else {
      // ファイルの出力なし
      result.status = MIGRATION_ITEM_STATUS.PROCESSED;
    }

    applyIf(onFileEnd, [result, config, params]);
  } else {
    result.status = MIGRATION_ITEM_STATUS.SKIPPED;
  }
  return result;
}
