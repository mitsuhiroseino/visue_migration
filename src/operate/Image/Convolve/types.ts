import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Convolve`の設定
 */
export type ConvolveConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.CONVOLVE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CONVOLVE;

  // 操作固有の設定
  kernel: string;
};
