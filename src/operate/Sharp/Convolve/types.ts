import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Convolve`の設定
 */
export type ConvolveConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.CONVOLVE> & {
  kernel: SharpLib.Kernel;
};
