import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Coalesce`の設定
 */
export type CoalesceConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.COALESCE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.COALESCE;

  // 操作固有の設定
};
