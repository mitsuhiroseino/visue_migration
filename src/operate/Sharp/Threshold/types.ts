import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Threshold`の設定
 */
export type ThresholdConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.THRESHOLD;

  threshold?: number;
} & SharpLib.ThresholdOptions;
