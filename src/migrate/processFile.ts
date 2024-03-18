import Encoding from 'encoding-japanese';
import fs from 'fs-extra';
import path from 'path';

import { MIGRATION_ITEM_STATUS } from './constants';
import finshParams from './helpers/finshParams';
import isCopyOnly from './helpers/isCopyOnly';
import operateBinaryContent from './operateBinaryContent';
import operateTextContent from './operateTextContent';
import { IterationParams, MigrationIterationResult, MigrationJobConfig } from './types';

export default async function processFile(
  inputPath: string,
  outputPath: string,
  config: MigrationJobConfig,
  params: IterationParams
): Promise<MigrationIterationResult> {
  if (isCopyOnly(config)) {
    // ファイルのコピーのみで済む場合
    const parentPath = path.dirname(outputPath);
    await fs.ensureDir(parentPath);
    // 単純コピー
    await fs.copyFile(inputPath, outputPath);
    return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.COPIED };
  } else {
    // ファイル内の変換が必要な場合
    const { binary, inputEncoding, outputEncoding } = config;
    // ファイルの入力
    const buffer = await fs.readFile(inputPath);
    let encoding: any;
    if (binary) {
      encoding = 'BINARY';
    } else {
      encoding = Encoding.detect(buffer);
    }
    let content;
    let writeFileOptions;
    if (!encoding || encoding === 'BINARY') {
      // バイナリファイルの場合
      content = await operateBinaryContent(buffer, config, finshParams(params, { inputPath, outputPath }));
    } else {
      // テキストファイルの場合
      content = buffer.toString(inputEncoding || encoding);
      // 内容の操作
      content = await operateTextContent(content, config, finshParams(params, { inputPath, outputPath }));
      writeFileOptions = { encoding: outputEncoding || encoding };
    }
    // ファイルの出力
    const parentPath = path.dirname(outputPath);
    await fs.ensureDir(parentPath);
    await fs.writeFile(outputPath, content, writeFileOptions);
    return { inputPath, outputPath, status: MIGRATION_ITEM_STATUS.CONVERTED };
  }
}
