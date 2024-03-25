import { ImageCallback } from '@jimp/core';
import { Invert } from '@jimp/plugin-invert';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Invert`の設定
 */
export type InvertConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.INVERT;

  callback?: ImageCallback<Invert>;
};
