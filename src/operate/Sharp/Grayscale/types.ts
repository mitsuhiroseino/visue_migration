import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Grayscale`の設定
 */
export type GrayscaleConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.GRAYSCALE> & {
  grayscale?: boolean;
};
