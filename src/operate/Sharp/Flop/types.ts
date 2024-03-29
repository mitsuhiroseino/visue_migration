import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Flop`の設定
 */
export type FlopConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.FLOP> & {
  flop?: boolean;
};
