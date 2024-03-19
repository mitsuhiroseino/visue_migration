import { Options } from 'prettier';

import { OPERATION_TYPE } from '../constants';
import { OperationConfig } from '../types';

/**
 * フォーマットの設定
 */
export type FormatConfig<O = Options> = OperationConfig & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.FORMAT;

  /**
   * 任意のフォーマッター
   * 未指定の場合はpreFormatting,postFormattingで使用しているフォーマッター
   * @param content 処理対象
   * @param options フォーマッターのオプション
   * @returns
   */
  formatter?: (content: string, options: O) => Promise<string>;

  /**
   * フォーマット時の設定
   */
  formatterOptions?: O;
};
