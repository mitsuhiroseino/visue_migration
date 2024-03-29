import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Trim`の設定
 */
export type TrimConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.TRIM> & {} & SharpLib.TrimOptions;
