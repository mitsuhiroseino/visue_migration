import { ImageCallback } from '@jimp/core';
import { Blur } from '@jimp/plugin-blur';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Blur`の設定
 */
export type BlurConfig<S = string> = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BLIT;

  radius: number;
  callback?: ImageCallback<Blur>;
};
