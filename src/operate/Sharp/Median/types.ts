import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Median`の設定
 */
export type MedianConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.MEDIAN> & {
  size?: number;
};
