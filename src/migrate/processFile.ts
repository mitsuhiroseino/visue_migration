import fs from 'fs-extra';
import path from 'path';

import { MIGRATION_ITEM_STATUS } from './constants';
import finshParams from './helpers/finshParams';
import isCopyOnly from './helpers/isCopyOnly';
import operateContent from './operateContent';
import { IterationParams, MigrationTargetConfig, MigrationTargetResult } from './types';

export default async function processFile(
  inputPath: string,
  outputPath: string,
  config: MigrationTargetConfig,
  params: IterationParams
): Promise<MigrationTargetResult> {
  if (isCopyOnly(config)) {
    // ファイルのコピーのみで済む場合
    const parentPath = path.dirname(outputPath);
    await fs.ensureDir(parentPath);
    const { inputEncoding, outputEncoding } = config;
    if (inputEncoding || outputEncoding) {
      // エンコードを考慮してコピー
      const content = await fs.readFile(inputPath, { encoding: inputEncoding });
      await fs.writeFile(outputPath, content, { encoding: outputEncoding });
    } else {
      // 単純コピー
      await fs.copyFile(inputPath, outputPath);
    }
    return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.COPIED };
  } else {
    // ファイル内の変換が必要な場合
    const { inputEncoding, outputEncoding } = config;
    // ファイルの入力
    let content = await fs.readFile(inputPath, { encoding: inputEncoding });
    // 内容の操作
    content = await operateContent(content, config, finshParams(params, { inputPath, outputPath }));
    // ファイルの出力
    const parentPath = path.dirname(outputPath);
    await fs.ensureDir(parentPath);
    await fs.writeFile(outputPath, content, { encoding: outputEncoding });
    return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.CONVERTED };
  }
}
