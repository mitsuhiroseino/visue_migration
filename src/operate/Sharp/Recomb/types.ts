import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Recomb`の設定
 */
export type RecombConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.RECOMB> & {
  inputMatrix: SharpLib.Matrix3x3;
};
