import applyIf from '../utils/applyIf';
import asArray from '../utils/asArray';
import executeTarget from './executeTarget';
import getIterator from './helpers/getIterator';
import inheritConfig from './helpers/inheritConfig';
import { IterationParams, MigrationJobConfig, MigrationJobResult } from './types';

/**
 * 以降の設定に従いソースファイルの移行を行う
 * @param configs ジョブ設定
 * @returns
 */
export default async function executeJob(config: MigrationJobConfig): Promise<MigrationJobResult> {
  // 繰り返し設定毎の処理
  const { iteration, jobParams, onJobStart, onJobEnd } = config;
  // タスク毎の前処理
  applyIf(onJobStart, [config]);

  // イテレーターを作成する
  const iterator = getIterator(iteration, config);
  // 対象の処理
  const targets = asArray(config.targets);
  let iterationParams: IterationParams;
  const targetResults = [];
  while ((iterationParams = iterator.next().value)) {
    // iteratorの返す値で繰り返し処理
    const params = { ...jobParams, ...iterationParams };
    for (const targetConfig of targets) {
      // 処理対象毎の処理
      const targetCfg = inheritConfig(targetConfig, config);
      // ターゲット間は直列実行
      targetResults.push(await executeTarget(targetCfg, params));
    }
  }
  const result = { targetResults };

  applyIf(onJobEnd, [result, config]);
  return result;
}
