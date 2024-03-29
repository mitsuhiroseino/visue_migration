import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`BlackThreshold`の設定
 */
export type BlackThresholdConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.BLACK_THRESHOLD> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BLACK_THRESHOLD;

  // 操作固有の設定
  intensity: number;
  red: number;
  green: number;
  blue: number;
  opacity?: number;
};
