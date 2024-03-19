import operate, { CONTENT_TYPE, OperationConfig } from '../operate';
import asArray from '../utils/asArray';
import catchError from './helpers/catchError';
import inheritConfig from './helpers/inheritConfig';
import { IterationParams, MigrationJobConfig } from './types';

/**
 * テキストコンテンツの変換処理を行う
 * @param content
 * @param config
 * @param params
 * @returns
 */
export default async function operateTextContent(
  content: string,
  config: MigrationJobConfig,
  params: IterationParams
): Promise<string> {
  const {
    initialize,
    formatter: format,
    preFormatting,
    postFormatting,
    formatterOptions,
    operations,
    finalize,
    forceOutput,
  } = config;
  const { _outputPath } = params;

  // 任意の前処理
  if (initialize) {
    try {
      content = await initialize(content, { ...params }, { ...config });
    } catch (e) {
      catchError(e, `Error in initializing: ${_outputPath}`, forceOutput);
      return content;
    }
  }

  if (preFormatting) {
    // 処理開始前のフォーマットあり
    try {
      content = await format(content, preFormatting as typeof formatterOptions);
    } catch (e) {
      catchError(e, `Error in pre-formatting: ${_outputPath}`, forceOutput);
      return content;
    }
  }

  let migrated;
  if (operations) {
    // 操作
    try {
      const operateConfigs = asArray<OperationConfig>(operations).map((operation) => inheritConfig(operation, config));
      migrated = await operate(content, operateConfigs, { ...params, _contentType: CONTENT_TYPE.BINARY });
    } catch (e) {
      catchError(e, `Error in operation: ${_outputPath}`, forceOutput);
      return content;
    }
  } else {
    migrated = { content, results: [] };
  }

  if (postFormatting) {
    // 処理終了後のフォーマットあり
    try {
      migrated.content = await format(migrated.content, postFormatting as typeof formatterOptions);
    } catch (e) {
      catchError(e, `Error in post-formatting: ${_outputPath}`, forceOutput);
      return migrated.content;
    }
  }

  // 任意の後処理
  if (finalize) {
    try {
      migrated.content = await finalize(migrated.content, { ...params }, migrated.results);
    } catch (e) {
      catchError(e, `Error in finalizing: ${_outputPath}`, forceOutput);
      return migrated.content;
    }
  }

  return migrated.content;
}
