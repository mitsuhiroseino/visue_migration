import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Convolve`の設定
 */
export type ConvolveConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.CONVOLVE;

  kernel: SharpLib.Kernel;
};
