import get from 'lodash/get';

export type ReplaceByValuesOptions = {
  /**
   * 置換対象を囲む文字
   * デフォルトは`['{{', '}}']`
   */
  replacementBracket?: [string, string];

  /**
   * 置換できなかったプレイスホルダーは削除する
   */
  removePlaceholders?: boolean;

  /**
   * '.'で区切られたキーでもvalues直下から値を取得する
   */
  flatKeys?: boolean;
};

export type ReplacementValues = { [key: string]: string | number | undefined };

const getShallow = (values, key) => values[key];

// 正規表現用のエスケープ処理
function escapeForRegex(str: string) {
  const regex = /([\\\/\*\+\.\?\{\}\(\)\[\]\^\$\-\|])/g;
  return str.replace(regex, '\\$1');
}

/**
 * 文字列にパラメーターの値を埋め込む
 * @param str 対象の文字列
 * @param values 埋め込む値
 * @param options オプション
 * @returns
 */
export default function replaceByValues(template: string, values: ReplacementValues, options: ReplaceByValuesOptions = {}) {
  const { replacementBracket = ['{{', '}}'], removePlaceholders, flatKeys } = options,
    // valuesから値を取得する関数
    getValue = flatKeys ? getShallow : get,
    // 取得した値がnull,undefinedだった時の値を取得する関数
    getFallbackValue = removePlaceholders
      ? // 値がnull,undefinedの場合は空文字で置換
        (match) => ''
      : // プレイスホルダーを残す
        (match) => match,
    l = escapeForRegex(replacementBracket[0]),
    r = escapeForRegex(replacementBracket[1]),
    pattern = `${l}(.*?)${r}`,
    regex = new RegExp(pattern, 'g');

  return template.replace(regex, (match, key) => {
    const value = getValue(values, key);
    if (value != null) {
      return value;
    } else {
      // 値がnull,undefinedの場合に返す値を取得
      return getFallbackValue(match);
    }
  });
}
