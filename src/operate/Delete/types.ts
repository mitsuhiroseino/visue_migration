import { OPERATION_TYPE } from '../constants';
import { FlexiblePattern, OperationConfigBase } from '../types';

/**
 * 文字列削除の設定
 */
export type DeleteConfig = OperationConfigBase<typeof OPERATION_TYPE.DELETE> & {
  /**
   * 削除対象
   */
  patterns: FlexiblePattern | FlexiblePattern[];

  /**
   * patternsの要素が文字列の場合にプレイスホルダーをparamsの値で置換する
   */
  formatPatterns?: boolean;
};
