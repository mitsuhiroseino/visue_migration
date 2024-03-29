import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Extend`の設定
 */
export type ExtendConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.EXTEND> & {
  extend?: number;
} & SharpLib.ExtendOptions;
