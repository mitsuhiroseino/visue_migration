import { BundleConfig } from '../Bundle';
import { OPERATION_TYPE } from '../constants';
import { OperationParams } from '../types';

/**
 * パラメーターの更新
 */
export type ParamsConfig = Omit<BundleConfig, 'type'> & {
  /**
   * 操作種別
   */
  type?: typeof OPERATION_TYPE.PARAMS;

  /**
   * パラメーターの差分作成関数
   * @param content コンテンツ
   * @param params 現在のパラメーター
   * @returns 現在のパラメーターとの差分
   */
  createDiff: (content: string, params: OperationParams) => Promise<OperationParams>;
};
