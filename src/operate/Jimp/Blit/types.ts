import { ImageCallback } from '@jimp/core';
import { Blit } from '@jimp/plugin-blit';
import { JIMP_MANIPULATION_TYPE } from '../constants';
import { JimpManipulationConfig } from '../types';

/**
 * 画像操作`Blit`の設定
 */
export type BlitConfig<S = string> = JimpManipulationConfig<typeof JIMP_MANIPULATION_TYPE.BLIT> & {
  src: S;
  x: number;
  y: number;
  srcX: number;
  srcY: number;
  srcWidth: number;
  srcHeight: number;
  callback?: ImageCallback<Blit>;
};
