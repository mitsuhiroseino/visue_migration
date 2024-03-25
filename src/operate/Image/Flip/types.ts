import { ImageCallback } from '@jimp/core';
import { Flip } from '@jimp/plugin-flip';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Flip`の設定
 */
export type FlipConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FLIP;

  horizontal: boolean;
  vertical: boolean;
  callback?: ImageCallback<Flip>;
};
