import { ImageCallback } from '@jimp/core';
import { Contain } from '@jimp/plugin-contain';
import { JIMP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Contain`の設定
 */
export type ContainConfig = {
  /**
   * 画像操作種別
   */
  type: typeof JIMP_MANIPULATION_TYPE.CONTAIN;

  width: number;
  height: number;
  alignBits?: number;
  mode?: string;
  callback?: ImageCallback<Contain>;
};
