import asArray from '../utils/asArray';
import executeAsyncFunctions from '../utils/executeAsyncFunctions';
import { MIGRATION_STATUS } from './constants';
import executeTask from './executeTask';
import assignDefaultConfig from './helpers/assignDefaultConfig';
import inheritConfig from './helpers/inheritConfig';
import { MigrationConfig, MigrationResult, MigrationStatus, MigrationTaskResult } from './types';

/**
 * 移行の設定に従いテキストファイルの移行を行う
 * @param config 移行設定
 * @returns
 */
export default async function migrate(config: MigrationConfig): Promise<MigrationResult> {
  const taskFns: (() => Promise<MigrationTaskResult>)[] = [];
  let results: MigrationTaskResult[], status: MigrationStatus, message: string, error;
  try {
    const cfg = assignDefaultConfig(config);
    const { tasks } = cfg;
    for (const task of asArray(tasks)) {
      const taskConfig = inheritConfig(task, cfg);
      // タスク実行用の関数を作成
      taskFns.push(async () => await executeTask(taskConfig));
    }
    // 設定に従い全タスクを実行
    results = await executeAsyncFunctions(taskFns, config.parallelTasks);
    status = MIGRATION_STATUS.SUCCESS;
  } catch (e) {
    status = MIGRATION_STATUS.ERROR;
    message = 'Exception occurred.';
    error = e;
  }
  return {
    results,
    status,
    message,
    error,
  };
}
