import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Greyscale`の設定
 */
export type GreyscaleConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.GREYSCALE> & {
  greyscale?: boolean;
};
