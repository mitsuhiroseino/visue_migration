import asArray from '../utils/asArray';
import { MIGRATION_STATUS } from './constants';
import executeTask from './executeTask';
import assignDefaultConfig from './helpers/assignDefaultConfig';
import inheritConfig from './helpers/inheritConfig';
import { MigrationConfig, MigrationResult } from './types';

/**
 * 移行の設定に従いテキストファイルの移行を行う
 * @param config 移行設定
 * @returns
 */
export default async function migrate(config: MigrationConfig): Promise<MigrationResult> {
  const taskResults = [];
  let status, message, error;
  try {
    const cfg = assignDefaultConfig(config);
    const { tasks } = cfg;
    for (const task of asArray(tasks)) {
      const taskConfig = inheritConfig(task, cfg);
      // タスク間は直列実行
      taskResults.push(await executeTask(taskConfig));
    }
    status = MIGRATION_STATUS.SUCCESS;
  } catch (e) {
    status = MIGRATION_STATUS.ERROR;
    message = 'Exception occurred.';
    error = e;
  }
  return {
    taskResults,
    status,
    message,
    error,
  };
}
