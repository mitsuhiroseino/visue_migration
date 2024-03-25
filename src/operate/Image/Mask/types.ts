import { ImageCallback } from '@jimp/core';
import { Mask } from '@jimp/plugin-mask';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Mask`の設定
 */
export type MaskConfig<S = string> = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MASK;

  src: S;
  x: number;
  y: number;
  callback?: ImageCallback<Mask>;
};
