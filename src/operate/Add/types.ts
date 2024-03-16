import { OPERATION_TYPE } from '../constants';
import { FlexiblePattern, OperationConfig } from '../types';

/**
 * 文字列追加の設定
 */
export type AddConfig = OperationConfig & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.ADD;

  /**
   * 追加する位置のアンカー
   */
  patterns?: FlexiblePattern | FlexiblePattern[];

  /**
   * patternsの要素が文字列の場合にプレイスホルダーをparamsの値で置換する
   */
  formatPatterns?: boolean;

  /**
   * 追加する文字列
   */
  additionalString: string;

  /**
   * additionalStringが文字列の場合にプレイスホルダーをparamsの値で置換する
   */
  formatAdditionalString?: boolean;

  /**
   * 追加位置
   */
  addPosition?: 'before' | 'after';
};
