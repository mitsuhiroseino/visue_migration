import { ImageCallback } from '@jimp/core';
import { Flip } from '@jimp/plugin-flip';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfig } from '../types';

/**
 * 画像操作`Flip`の設定
 */
export type FlipConfig = ImageManipulationConfig<typeof JIMP_MANIPULATION_TYPE.FLIP> & {
  horizontal: boolean;
  vertical: boolean;
  callback?: ImageCallback<Flip>;
};
