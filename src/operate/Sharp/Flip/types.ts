import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Flip`の設定
 */
export type FlipConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.FLIP> & {
  flip?: boolean;
};
