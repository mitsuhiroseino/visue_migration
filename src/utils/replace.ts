import isFunction from 'lodash/isFunction';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';

/**
 * 静的パターン
 */
export type StaticPattern = string | RegExp;

/**
 * 動的パターン
 */
export type DynamicPattern = (options?: ReplaceOptions) => StaticPattern | DynamicPattern;

/**
 * 静的・動的パターン
 */
export type FlexiblePattern = StaticPattern | DynamicPattern;

/**
 * パターンを動的に作成する関数の引数に渡すオプション
 */
export type ReplaceOptions = { [key: string]: unknown };

/**
 * 文字列の置換を行う
 * @param str 対象の文字列
 * @param pattern 置換対象のパターン。パターンが関数の場合はその戻り値の文字列や正規表現で置換を行う
 * @param replacement 置換後の文字列
 * @param oprions patternが関数の場合に引数として渡すオプション
 * @returns
 */
export default function replace<O extends ReplaceOptions = ReplaceOptions>(
  str: string,
  pattern: FlexiblePattern,
  replacement: string | ((substring: string, ...args: any[]) => string),
  oprions?: O
) {
  if (str != null) {
    if (isString(pattern)) {
      // パターンが文字列の場合
      return str.replaceAll(pattern, replacement as any);
    } else if (isRegExp(pattern)) {
      // パターンが正規表現の場合
      return str.replace(pattern, replacement as any);
    } else if (isFunction(pattern)) {
      // パターンが関数の場合
      return replace(str, (pattern as DynamicPattern)(oprions), replacement);
    }
  }
  return str;
}
