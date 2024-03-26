import { ImageCallback } from '@jimp/core';
import { Normalize } from '@jimp/plugin-normalize';
import { JIMP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Normalize`の設定
 */
export type NormalizeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof JIMP_MANIPULATION_TYPE.NORMALIZE;

  callback?: ImageCallback<Normalize>;
};
