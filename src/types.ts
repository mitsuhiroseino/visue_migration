import { Options } from 'prettier';
import { DynamicPattern, ReplaceOptions } from './utils/replace';
import { ReplacePlaceholdersOptions, ReplacementValues } from './utils/replacePlaceholders';

/**
 * ファイルの内容の型
 */
export type Content = string | Buffer | any;

/**
 * テキストのフォーマット処理に関する設定
 */
export type FormattingConfig<O = Options> = {
  /**
   * フォーマッターの指定
   * @param content コンテンツ
   * @param options オプション
   * @returns
   */
  formatter?: (content: string, options: O) => Promise<string>;

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
 * テキストの置換に関する設定
 */
export type ReplacementConfig<P = ReplacementValues> = ReplacePlaceholdersOptions & {
  /**
   * プレイスホルダーと置き換えられる値
   */
  params?: P;
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

/**
 * ログに関する設定
 */
export type LogConfig = {
  /**
   * ログを出力しない
   */
  silent?: boolean;
};

/**
 * 動的に変更される文字列
 */
export type VariableString<O extends ReplaceOptions = ReplaceOptions> = string | DynamicPattern<O>;
