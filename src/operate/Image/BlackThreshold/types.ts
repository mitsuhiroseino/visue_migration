import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`BlackThreshold`の設定
 */
export type BlackThresholdConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BLACK_THRESHOLD;

  intensity: number;
  red: number;
  green: number;
  blue: number;
  opacity?: number;
};
