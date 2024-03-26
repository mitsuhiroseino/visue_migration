import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Threshold`の設定
 */
export type ThresholdConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.THRESHOLD;

  value: number;
  percent?: boolean;
};
