import isFunction from 'lodash/isFunction';
import asArray from './asArray';
import isMatch, { Condition } from './isMatch';
import prepareValue, { PrepareValueOptions, ReplacementValues } from './prepareValue';
import replace, { FlexiblePattern, ReplaceOptions, StaticPattern } from './replace';

export { DynamicPattern, FlexiblePattern, StaticPattern } from './replace';

/**
 * 置換設定
 */
export type ReplaceWithConfigsConfig<O extends ReplaceOptions = ReplaceOptions> = Omit<
  PrepareValueOptions,
  'preserveString' | 'preserveFunction'
> & {
  /**
   * パターン
   */
  patterns: FlexiblePattern | FlexiblePattern[];

  /**
   * patternsの要素のプレイスホルダーを置換するなどの前処理を行わない
   */
  preservePatterns?: boolean;

  /**
   * 置換後の文字列
   */
  replacement: string | ((substring: string, ...args: any[]) => string);

  /**
   * replacementのプレイスホルダーを置換するなどの前処理を行わない
   */
  preserveReplacement?: boolean;

  /**
   * 条件に当てはまったもののみ処理対象とする
   */
  filter?: Condition<O>;
};

/**
 * 任意の置換処理
 */
export type Replacer<O extends ReplaceOptions = ReplaceOptions> = (str: string, options?: O) => string;

/**
 * 設定を基に文字列の置換を行う
 * @param str 対象の文字列
 * @param configs 置換設定
 * @param options 文字列のプレイスホルダーへの埋め込みや、関数のオプションに使う値
 * @returns
 */
export default function replaceWithConfigs<O extends ReplaceOptions = ReplaceOptions>(
  str: string,
  configs: ReplaceWithConfigsConfig | ReplaceWithConfigsConfig[] | Replacer | Replacer[],
  options?: O,
) {
  let result = str;
  for (const config of asArray(configs)) {
    const replacer = createReplacer(config);
    result = replacer(result, options);
  }
  return result;
}

// Replacerを作成する
function createReplacer(config: ReplaceWithConfigsConfig | Replacer): Replacer {
  if (isFunction(config)) {
    // Replacerの場合
    return config;
  } else {
    // ReplaceByConfigsConfigの場合
    let { patterns, preservePatterns, replacement = '', preserveReplacement, filter, ...prepareValueOptions } = config;
    // パターン用の前準備の設定
    const patternsOpations = {
      preserveString: preservePatterns,
      preserveFunction: preservePatterns,
      ...prepareValueOptions,
    };
    // 置換後文字列用の前準備の設定
    const replacementOpations = {
      preserveString: preserveReplacement,
      preserveFunction: preserveReplacement,
      ...prepareValueOptions,
    };

    // Replacerを作って返す
    return (str: string, options: ReplaceOptions = {}) => {
      // 置換後文字列の作成
      const rep: string = prepareValue(replacement, options, replacementOpations);
      let result = str;
      if (isMatch(str, filter, options)) {
        for (const pattern of asArray(patterns)) {
          // パターンの作成
          const ptn: StaticPattern = prepareValue(pattern, options, patternsOpations);
          result = replace(result, ptn, rep, options);
        }
      }
      return result;
    };
  }
}
