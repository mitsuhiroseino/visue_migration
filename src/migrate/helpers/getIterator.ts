import isPlainObject from 'lodash/isPlainObject';

import { IterationParams, MigrationTargetConfig } from '../types';

/**
 * イテレーターを取得する
 * @param iteration イテレーターの素
 * @param config ジョブ設定
 * @returns
 */
export default function getIterator(
  iteration: (cfg: MigrationTargetConfig) => Generator<IterationParams> | IterationParams[] | IterationParams | null | undefined,
  config: MigrationTargetConfig
): Generator<IterationParams> {
  // ジェネレーターを作成する
  let generator: (cfg: MigrationTargetConfig) => Generator<IterationParams>;
  if (iteration == null) {
    // 空のparamsを1つだけ返すジェネレーター
    generator = function* () {
      yield {};
    };
  } else if (Array.isArray(iteration)) {
    // 指定されたパラメーターを繰り返し返すジェネレーター
    const array = [].concat(iteration);
    generator = function* () {
      for (const params of array) {
        yield params;
      }
    };
  } else if (isPlainObject(iteration)) {
    // 指定されたパラメーターを返すジェネレーター
    const object = { ...iteration };
    generator = function* () {
      yield object;
    };
  } else {
    // 指定のジェネレーター
    generator = iteration as (cfg: MigrationTargetConfig) => Generator<IterationParams>;
  }
  // イテレーターを返す
  return generator(config);
}
