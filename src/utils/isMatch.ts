import isFunction from 'lodash/isFunction';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';

/**
 * 条件
 */
export type Condition<O> = string | RegExp | ((value: string, options?: O) => boolean) | ((value: string, options?: O) => Promise<boolean>);

export default async function isMatch<O = any>(value: string, condition?: Condition<O>, options?: O): Promise<boolean> {
  if (condition == null) {
    // 条件なし
    return true;
  } else if (isString(condition)) {
    // 文字列が一致
    return value.includes(condition);
  } else if (isRegExp(condition)) {
    // 正規表現に一致
    return condition.test(value);
  } else if (isFunction(condition)) {
    // 関数の戻り値で判断
    const result = condition(value, options);
    if (result instanceof Promise) {
      return await result;
    } else {
      return result;
    }
  }
  return false;
}
