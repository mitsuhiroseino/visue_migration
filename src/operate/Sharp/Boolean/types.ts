import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Boolean`の設定
 */
export type BooleanConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.BOOLEAN> & {
  operand: string | Buffer;
  operator: keyof SharpLib.BoolEnum;
  raw?: SharpLib.Raw;
};
