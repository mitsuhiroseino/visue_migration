import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Matte`の設定
 */
export type MatteConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MATTE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MATTE;

  // 操作固有の設定
};
