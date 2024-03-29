import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Sharpen`の設定
 */
export type SharpenConfig = SharpManipulationConfig<
  typeof SHARP_MANIPULATION_TYPE.SHARPEN
> & {} & SharpLib.SharpenOptions;
