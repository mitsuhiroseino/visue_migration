import { ImageCallback } from '@jimp/core';
import { ResizeClass } from '@jimp/plugin-resize';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Resize`の設定
 */
export type ResizeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RESIZE;

  width: number;
  height: number;
  mode?: string;
  callback?: ImageCallback<ResizeClass>;
};
