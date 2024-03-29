import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Resize`の設定
 */
export type ResizeConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.RESIZE> & {} & SharpLib.ResizeOptions;
