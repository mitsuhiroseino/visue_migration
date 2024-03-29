import { ImageCallback } from '@jimp/core';
import { Mask } from '@jimp/plugin-mask';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfig } from '../types';

/**
 * 画像操作`Mask`の設定
 */
export type MaskConfig<S = string> = ImageManipulationConfig<typeof JIMP_MANIPULATION_TYPE.MASK> & {
  src: S;
  x: number;
  y: number;
  callback?: ImageCallback<Mask>;
};
