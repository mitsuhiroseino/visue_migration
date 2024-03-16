import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

import replaceByValues, { ReplaceByValuesOptions, ReplacementValues } from './replaceByValues';

export type PrepareOptions = ReplaceByValuesOptions & {
  /**
   * 文字列の場合はそのまま返す
   */
  preserveString?: boolean;

  /**
   * 関数の場合はそのまま返す
   */
  preserveFunction?: boolean;

  /**
   * 関数の場合に第二引数に渡すオプション値
   */
  [key: string]: unknown;
};

/**
 * targetが文字列の場合はvaluesを埋め込んだ文字列を返し、
 * targetが関数の場合はvaluesを引数に渡して実行した結果を返し、
 * それ以外の場合はそのままの値を返す。
 * @param target
 * @param values
 * @param options
 * @returns
 */
export default function prepareValue<T, R>(target: T, values: ReplacementValues, options: PrepareOptions = {}): R {
  const { preserveString, preserveFunction, replacementBracket, ...opts } = options;
  if (!preserveString && isString(target)) {
    return replaceByValues(target, values, { replacementBracket }) as R;
  } else if (!preserveFunction && isFunction(target)) {
    return target(values, opts);
  } else {
    return target as unknown as R;
  }
}
