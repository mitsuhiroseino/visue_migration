import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Threshold`の設定
 */
export type ThresholdConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.THRESHOLD> & {
  threshold?: number;
} & SharpLib.ThresholdOptions;
