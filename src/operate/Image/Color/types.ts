import { ImageCallback } from '@jimp/core';
import { Color, ColorAction } from '@jimp/plugin-color';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Color`の設定
 */
export type ColorConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COLOR;

  actions: ColorAction[];
  callback?: ImageCallback<Color>;
};
