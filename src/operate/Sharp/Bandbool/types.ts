import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Bandbool`の設定
 */
export type BandboolConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.BANDBOOL> & {
  boolOp: keyof SharpLib.BoolEnum;
};
