import { ImageCallback } from '@jimp/core';
import { Dither } from '@jimp/plugin-dither';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulationConfig } from '../types';

/**
 * 画像操作`Dither`の設定
 */
export type DitherConfig = JimpManipulationConfig<typeof JIMP_MANIPULATION_TYPE.DITHER> & {
  callback?: ImageCallback<Dither>;
};
