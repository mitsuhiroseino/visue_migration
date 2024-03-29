import { ImageCallback } from '@jimp/core';
import { Scale } from '@jimp/plugin-scale';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfig } from '../types';

/**
 * 画像操作`Scale`の設定
 */
export type ScaleConfig = ImageManipulationConfig<typeof JIMP_MANIPULATION_TYPE.SCALE> & {
  fit?: boolean;
  factor?: number;
  width?: number;
  height?: number;
  mode?: string;
  callback?: ImageCallback<Scale>;
};
