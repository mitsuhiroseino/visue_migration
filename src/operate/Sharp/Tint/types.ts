import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Tint`の設定
 */
export type TintConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.TINT> & {
  tint: SharpLib.Color;
};
