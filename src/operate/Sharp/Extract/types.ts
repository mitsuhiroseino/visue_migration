import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Extract`の設定
 */
export type ExtractConfig = SharpManipulationConfig<typeof SHARP_MANIPULATION_TYPE.EXTRACT> & {
  region: SharpLib.Region;
};
