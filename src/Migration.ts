import migrate, { MIGRATION_STATUS, MigrationConfig, MigrationResult, MigrationTaskConfig } from './migrate';
import asArray from './utils/asArray';

/**
 * 移行クラス
 */
class Migration<C extends MigrationConfig = MigrationConfig> {
  /**
   * 読み込み済みのコンフィグ
   */
  private _config: C;

  /**
   * タスクのマップ
   */
  private _tasks: { [id: string]: MigrationTaskConfig };

  constructor() {}

  /**
   * 移行設定の初期化
   * @param config 移行設定
   */
  initConfig(config: C) {
    const _tasks: { [id: string]: MigrationTaskConfig } = {};
    for (const task of asArray(config.tasks)) {
      if (task.id != null) {
        _tasks[task.id] = task;
      }
    }
    this._tasks = _tasks;
    this._config = config;
  }

  /**
   * 移行処理の実行
   * @param tasks 実行するタスクのIDの配列。未指定の場合は登録されている全てのタスクを実行する
   * @returns 処理結果
   */
  async run(tasks?: string | string[]): Promise<MigrationResult> {
    const taskIDs = asArray(tasks),
      taskConfigs = [];
    let config;

    if (taskIDs.length) {
      // タスクを選択して実行する場合
      for (const taskID of taskIDs) {
        if (taskID != null) {
          const taskConfig = this._tasks[taskID];
          if (taskConfig != null) {
            taskConfigs.push(taskConfig);
          } else {
            const message = `There was no task "${taskID}".`;
            console.error(message);
            return {
              status: MIGRATION_STATUS.ERROR,
              message,
            };
          }
        }
      }
      config = { ...this._config, tasks: taskConfigs };
    } else {
      // 全タスクを実行する場合
      config = this._config;
    }
    return await migrate(config);
  }
}
export default Migration;
