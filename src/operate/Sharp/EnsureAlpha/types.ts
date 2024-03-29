import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`EnsureAlpha`の設定
 */
export type EnsureAlphaConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.ENSURE_ALPHA> & {
  alpha?: number;
};
