import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`WhiteThreshold`の設定
 */
export type WhiteThresholdConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.WHITE_THRESHOLD;

  red: number;
  green: number;
  blue: number;
  opacity?: number;
  intensity: number;
};
