import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`RemoveAlpha`の設定
 */
export type RemoveAlphaConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.REMOVE_ALPHA> & {};
