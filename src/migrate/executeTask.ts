import StopWatch from '../utils/StopWatch';
import applyIf from '../utils/applyIf';
import asArray from '../utils/asArray';
import executeJob from './executeJob';
import inheritConfig from './helpers/inheritConfig';
import { MigrationJobResult, MigrationTaskConfig, MigrationTaskResult } from './types';

/**
 * 以降の設定に従いソースファイルの移行を行う
 * @param configs 移行設定
 * @returns
 */
export default async function executeTask(config: MigrationTaskConfig): Promise<MigrationTaskResult> {
  const stopWatch = new StopWatch();
  const { jobs, onTaskStart, onTaskEnd } = config;
  applyIf(onTaskStart, [config]);

  const promises: Promise<MigrationJobResult>[] = [];
  const jobConfigs = asArray(jobs);
  for (const jobConfig of jobConfigs) {
    // ジョブ毎の処理
    const jobCfg = inheritConfig(jobConfig, config);
    promises.push(executeJob(jobCfg));
  }
  // ジョブ間は並列処理
  const jobResults = await Promise.all(promises);
  const result = { jobResults, ...stopWatch.stop() };

  applyIf(onTaskEnd, [result, config]);
  return result;
}
