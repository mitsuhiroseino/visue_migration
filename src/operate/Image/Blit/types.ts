import { ImageCallback } from '@jimp/core';
import { Blit } from '@jimp/plugin-blit';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Blit`の設定
 */
export type BlitConfig<S = string> = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BLIT;

  src: S;
  x: number;
  y: number;
  srcX: number;
  srcY: number;
  srcWidth: number;
  srcHeight: number;
  callback?: ImageCallback<Blit>;
};
