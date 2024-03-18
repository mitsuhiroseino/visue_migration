import { Content } from '../../types';
import { OPERATION_TYPE } from '../constants';
import { OperationConfig, OperationParams } from '../types';

/**
 * 編集関数の設定
 */
export type BundleConfig<C = Content> = OperationConfig & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.BUNDLE;

  /**
   * 纏められた操作
   */
  operations: OperationConfig | OperationConfig[] | ((content: C, params: OperationParams) => Promise<OperationConfig | OperationConfig[]>);
};
