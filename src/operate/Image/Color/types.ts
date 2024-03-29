import { ImageCallback } from '@jimp/core';
import { Color, ColorAction } from '@jimp/plugin-color';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfig } from '../types';

/**
 * 画像操作`Color`の設定
 */
export type ColorConfig = ImageManipulationConfig<typeof JIMP_MANIPULATION_TYPE.COLOR> & {
  actions: ColorAction[];
  callback?: ImageCallback<Color>;
};
