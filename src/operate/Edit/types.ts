import { OPERATION_TYPE } from '../constants';
import { OperationConfig, OperationParams } from '../types';

/**
 * 編集関数の設定
 */
export type EditConfig = OperationConfig & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.EDIT;

  /**
   * 編集関数
   */
  editContent: (content: string, params: OperationParams) => Promise<string>;
};
