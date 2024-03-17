import applyIf from '../utils/applyIf';
import asArray from '../utils/asArray';
import executeTarget from './executeTarget';
import inheritConfig from './helpers/inheritConfig';
import { MigrationJobConfig, MigrationJobResult } from './types';

/**
 * 以降の設定に従いソースファイルの移行を行う
 * @param configs ジョブ設定
 * @returns
 */
export default async function executeJob(config: MigrationJobConfig): Promise<MigrationJobResult> {
  // 繰り返し設定毎の処理
  const { onJobStart, onJobEnd } = config;
  // タスク毎の前処理
  applyIf(onJobStart, [config]);

  // 対象の処理
  const targets = asArray(config.targets);
  const results = [];
  for (const targetConfig of targets) {
    // 処理対象毎の処理
    const targetCfg = inheritConfig(targetConfig, config);
    // ターゲット間は直列実行
    results.push(await executeTarget(targetCfg));
  }
  const result = { results };

  applyIf(onJobEnd, [result, config]);
  return result;
}
