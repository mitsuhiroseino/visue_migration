import isString from 'lodash/isString';

import { INHERITED_CONFIGS } from '../constants';

/**
 * 親から子に引き継ぐコンフィグの設定
 * @param config 子の設定
 * @param baseConfig 親の設定
 * @param mapping 子と親のコンフィグ名が異なる場合のマッピング。親のコンフィグ名をキー、子のコンフィグ名を値として定義する
 */
export default function inheritConfig<C extends object>(
  config: C,
  baseConfig: object,
  mapping: { [baseConfigName: string]: string | boolean } = INHERITED_CONFIGS
): C {
  for (const name in mapping) {
    const nm = isString(mapping[name]) ? (mapping[name] as string) : name;
    if (nm in config === false && name in baseConfig) {
      config[nm] = baseConfig[name];
    }
  }
  return config;
}
