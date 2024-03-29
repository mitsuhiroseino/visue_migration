import { OPERATION_TYPE } from '../constants';
import { FlexiblePattern, OperationConfig } from '../types';

/**
 * 文字列置換の設定
 */
export type ReplaceConfig = OperationConfig & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.REPLACE;

  /**
   * 置換対象
   */
  patterns: FlexiblePattern | FlexiblePattern[];

  /**
   * patternsの要素が文字列の場合にプレイスホルダーをparamsの値で置換する
   */
  formatPatterns?: boolean;

  /**
   * 置き換えるもの
   */
  replacement: string | ((substring: string, ...args: any[]) => string);

  /**
   * replacementが文字列の場合にプレイスホルダーをparamsの値で置換する
   */
  formatReplacement?: boolean;
};
