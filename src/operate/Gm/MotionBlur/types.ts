import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`MotionBlur`の設定
 */
export type MotionBlurConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MOTION_BLUR> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MOTION_BLUR;

  // 操作固有の設定
  radius: number;
  sigma?: number;
  angle?: number;
};
