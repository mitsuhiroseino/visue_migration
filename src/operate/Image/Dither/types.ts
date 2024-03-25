import { ImageCallback } from '@jimp/core';
import { Dither } from '@jimp/plugin-dither';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Dither`の設定
 */
export type DitherConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DITHER;

  callback?: ImageCallback<Dither>;
};
