import fs from 'fs-extra';
import path from 'path';
import { DEFAULT_TEXT_ENCODING, MIGRATION_ITEM_STATUS } from './constants';
import finishParams from './helpers/finishParams';
import operateContent from './operateContent';
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
  content: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams,
): Promise<MigrationIterationResult> {
  // 操作
  content = (await operateContent(content, config, finishParams(params, { content }))) as string;
  if (outputPath != null) {
    // ファイルの出力
    const parentPath = path.dirname(outputPath);
    await fs.ensureDir(parentPath);
    const { outputEncoding = DEFAULT_TEXT_ENCODING } = config;
    await fs.writeFile(outputPath, content, { encoding: outputEncoding });
    return { outputPath, status: MIGRATION_ITEM_STATUS.CREATED };
  } else {
    return { outputPath, status: MIGRATION_ITEM_STATUS.PROCESSED };
  }
}
