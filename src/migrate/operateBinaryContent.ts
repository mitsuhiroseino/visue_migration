import operate, { OperationConfig } from '../operate';
import asArray from '../utils/asArray';
import inheritConfig from './helpers/inheritConfig';
import { IterationParams, MigrationJobConfig } from './types';

const catchError = (e: any, message: string, config: MigrationJobConfig, params: IterationParams) => {
  if (!config.forceOutput) {
    console.error(`${message}: ${params._outputPath}`);
    throw e;
  }
};

/**
 * テキストコンテンツの変換処理を行う
 * @param content
 * @param config
 * @param params
 * @returns
 */
export default async function operateBinaryContent(content: Buffer, config: MigrationJobConfig, params: IterationParams): Promise<Buffer> {
  const { initialize, operations, finalize } = config;

  // 任意の前処理
  if (initialize) {
    try {
      content = await initialize(content, { ...params }, { ...config });
    } catch (e) {
      catchError(e, 'Error in initializing', config, params);
      return content;
    }
  }

  let migrated;
  if (operations) {
    // 操作
    try {
      const operateConfigs = asArray<OperationConfig>(operations).map((operation) => inheritConfig(operation, config));
      migrated = await operate(content, operateConfigs, { ...params });
    } catch (e) {
      catchError(e, 'Error in operation', config, params);
      return content;
    }
  } else {
    migrated = { content, results: [] };
  }

  // 任意の後処理
  if (finalize) {
    try {
      migrated.content = await finalize(migrated.content, { ...params }, migrated.results);
    } catch (e) {
      catchError(e, 'Error in finalizing', config, params);
      return migrated.content;
    }
  }

  return migrated.content;
}
