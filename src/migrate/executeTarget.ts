import applyIf from '../utils/applyIf';
import executeIteration from './executeIteration';
import getIterator from './helpers/getIterator';
import { IterationParams, MigrationTargetConfig, MigrationTargetResult } from './types';

/**
 * 1処理対象分の処理を行う
 * @param config 移行対象の設定
 * @param params 繰り返し毎のパラメーター
 */
export default async function executeTarget(config: MigrationTargetConfig): Promise<MigrationTargetResult | null> {
  const { iteration, params: targetParams, onTargetStart, onTargetEnd, filter } = config;

  // 対象が存在する場合
  applyIf(onTargetStart, [config]);

  // イテレーターを作成する
  const iterator = getIterator(iteration, config);
  // 対象の処理
  let iterationParams: IterationParams;
  const results = [];
  while ((iterationParams = iterator.next().value)) {
    // iteratorの返す値で繰り返し処理
    const params = { ...targetParams, ...iterationParams };
    // イテレーション間は直列実行
    results.push(await executeIteration(config, params));
  }
  const result = { results };

  applyIf(onTargetEnd, [result, config]);
  return result;
}
