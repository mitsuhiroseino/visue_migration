import Sharp from 'sharp';

import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Convolve`の設定
 */
export type ConvolveConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CONVOLVE;

  kernel: Sharp.Kernel;
};
