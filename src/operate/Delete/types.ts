import { OPERATION_TYPE } from '../constants';
import { FlexiblePattern, OperationConfig } from '../types';

/**
 * 文字列削除の設定
 */
export type DeleteConfig = OperationConfig & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.DELETE;

  /**
   * 削除対象
   */
  patterns: FlexiblePattern | FlexiblePattern[];

  /**
   * patternsの要素が文字列の場合にプレイスホルダーをparamsの値で置換する
   */
  formatPatterns?: boolean;
};
