import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Scale`の設定
 */
export type ScaleConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SCALE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SCALE;

  // 操作固有の設定
  width: number;
  height: number;
};
