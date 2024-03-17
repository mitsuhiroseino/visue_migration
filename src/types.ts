import { Options } from 'prettier';

import { ReplaceByValuesOptions, ReplacementValues } from './utils/replaceByValues';

/**
 * ソースコードのフォーマット処理に関する設定
 */
export type FormattingConfig<O = Options> = {
  /**
   * フォーマッターの指定
   * @param source ソース
   * @param options オプション
   * @returns
   */
  formatter?: (source: string, options: O) => Promise<string>;

  /**
   * 移行処理開始前のフォーマット有無
   */
  preFormatting?: boolean | O;

  /**
   * 移行処理終了後のフォーマット有無
   */
  postFormatting?: boolean | O;

  /**
   * フォーマット時の設定
   * preFormatting,postFormattingがtrueの場合は、この設定を使用してフォーマットを行う
   */
  formatterOptions?: O;
};

/**
 * ソースコードの置換に関する設定
 */
export type ReplacementConfig = ReplaceByValuesOptions & {
  /**
   * プレイスホルダーと置き換えられる値
   */
  params?: ReplacementValues;
};

/**
 * ファイルの入出力に関する設定
 */
export type InputOputputConfig = {
  /**
   * テキストファイル読み込み時のエンコーディング
   * 未指定の場合はutf8
   */
  inputEncoding?: BufferEncoding;

  /**
   * テキストファイル書き込み時のエンコーディング
   * 未指定の場合はutf8
   */
  outputEncoding?: BufferEncoding;

  /**
   * エラーがあってもファイルを出力する
   */
  forceOutput?: boolean;
};
