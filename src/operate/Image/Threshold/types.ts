import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Threshold`の設定
 */
export type ThresholdConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.THRESHOLD> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.THRESHOLD;

  // 操作固有の設定
  value: number;
  percent?: boolean;
};
