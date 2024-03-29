import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Flip`の設定
 */
export type FlipConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.FLIP> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.FLIP;

  // 操作固有の設定
};
