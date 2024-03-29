import { ImageCallback } from '@jimp/core';
import { Blur } from '@jimp/plugin-blur';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulationConfig } from '../types';

/**
 * 画像操作`Blur`の設定
 */
export type BlurConfig = JimpManipulationConfig<typeof JIMP_MANIPULATION_TYPE.BLUR> & {
  radius: number;
  callback?: ImageCallback<Blur>;
};
