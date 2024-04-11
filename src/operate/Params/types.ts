import { Content } from '../../types';
import { OPERATION_TYPE } from '../constants';
import { OperationParams, ParentOperationConfigBase } from '../types';

/**
 * パラメーターの更新
 */
export type ParamsConfig<C = Content> = ParentOperationConfigBase<typeof OPERATION_TYPE.PARAMS, C> & {
  /**
   * パラメーターの差分作成関数
   * @param content コンテンツ
   * @param params 現在のパラメーター
   * @returns 現在のパラメーターとの差分
   */
  createDiff: (content: C, params: OperationParams) => Promise<OperationParams>;

  /**
   * 編集したパラメーターの有効範囲の指定
   *
   * - true: パラメーターは同一繰り返し処理内で有効
   * - false or 未指定: パラメーターは子操作の処理でのみ有効
   */
  iterationScope?: boolean;
};
