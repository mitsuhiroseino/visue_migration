import isFunction from 'lodash/isFunction';

import replaceByValues, { ReplaceByValuesOptions, ReplacementValues } from './replaceByValues';

/**
 * パラメーターを適用した文字列を取得する
 * @param subject 処理対象
 * @param values パラメーター
 * @param replaceByValuesOptions 置換設定
 * @returns 最終的な文字列
 */
export default async function getFinishedString(
  subject: string | ((params: ReplacementValues) => string) | ((params: ReplacementValues) => Promise<string>),
  values: ReplacementValues,
  replaceByValuesOptions?: ReplaceByValuesOptions
): Promise<string> {
  if (isFunction(subject)) {
    const result = subject(values);
    if (result instanceof Promise) {
      return await result;
    } else {
      return result;
    }
  } else {
    return (() => replaceByValues(subject, values, replaceByValuesOptions))();
  }
}
