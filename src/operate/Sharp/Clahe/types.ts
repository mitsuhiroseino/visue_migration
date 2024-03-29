import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Clahe`の設定
 */
export type ClaheConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.CLAHE> & {} & SharpLib.ClaheOptions;
