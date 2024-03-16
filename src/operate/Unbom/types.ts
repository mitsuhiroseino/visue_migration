import { OPERATION_TYPE } from '../constants';
import { OperationConfig } from '../types';

/**
 * BOM削除の設定
 */
export type UnbomConfig = OperationConfig & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.UNBOM;
};
