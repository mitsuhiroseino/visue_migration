import { OPERATION_TYPE } from '../constants';
import { OperationConfig, OperationParams } from '../types';

/**
 * 編集関数の設定
 */
export type BundleConfig = OperationConfig & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.BUNDLE;

  /**
   * 纏められた操作
   */
  operations:
    | OperationConfig
    | OperationConfig[]
    | ((content: string, params: OperationParams) => Promise<OperationConfig | OperationConfig[]>);
};
