import { ImageCallback } from '@jimp/core';
import { Gaussian } from '@jimp/plugin-gaussian';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Gaussian`の設定
 */
export type GaussianConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GAUSSIAN;

  radius: number;
  callback?: ImageCallback<Gaussian>;
};
