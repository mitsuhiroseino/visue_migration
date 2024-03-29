import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Unflatten`の設定
 */
export type UnflattenConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.UNFLATTEN> & {};
