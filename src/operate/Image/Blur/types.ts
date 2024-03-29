import { ImageCallback } from '@jimp/core';
import { Blur } from '@jimp/plugin-blur';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfig } from '../types';

/**
 * 画像操作`Blur`の設定
 */
export type BlurConfig = ImageManipulationConfig<typeof JIMP_MANIPULATION_TYPE.BLUR> & {
  radius: number;
  callback?: ImageCallback<Blur>;
};
