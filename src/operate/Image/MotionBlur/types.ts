import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`MotionBlur`の設定
 */
export type MotionBlurConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MOTION_BLUR;

  radius: number;
  sigma?: number;
  angle?: number;
};
