import isFunction from 'lodash/isFunction';
import isRegExp from 'lodash/isRegExp';
import isString from 'lodash/isString';

/**
 * 条件
 */
export type Condition =
  | string
  | RegExp
  | ((value: any, options?: any) => boolean)
  | ((value: any, options?: any) => Promise<boolean>);

export default async function isMatch<C, O>(value: C, condition?: Condition, options?: O): Promise<boolean> {
  if (condition == null) {
    // 条件なし
    return true;
  } else if (isFunction(condition)) {
    // 関数の戻り値で判断
    const result = condition(value, options);
    if (result instanceof Promise) {
      return await result;
    } else {
      return result;
    }
  } else if (isString(value)) {
    if (isString(condition)) {
      // 文字列が一致
      return value.includes(condition);
    } else if (isRegExp(condition)) {
      // 正規表現に一致
      return condition.test(value);
    }
  }
  return false;
}
