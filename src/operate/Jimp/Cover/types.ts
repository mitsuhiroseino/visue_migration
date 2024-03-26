import { ImageCallback } from '@jimp/core';
import { Cover } from '@jimp/plugin-cover';
import { JIMP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Cover`の設定
 */
export type CoverConfig = {
  /**
   * 画像操作種別
   */
  type: typeof JIMP_MANIPULATION_TYPE.COVER;

  width: number;
  height: number;
  alignBits?: number;
  mode?: string;
  callback?: ImageCallback<Cover>;
};
