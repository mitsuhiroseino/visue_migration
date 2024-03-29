import SharpLib from 'sharp';
import { SHARP_MANIPULATION_TYPE } from '../constants';
import { SharpManipulationConfig } from '../types';

/**
 * 画像操作`Normalize`の設定
 */
export type NormalizeConfig = SharpManipulationConfig<
  typeof SHARP_MANIPULATION_TYPE.NORMALIZE
> & {} & SharpLib.NormaliseOptions;
