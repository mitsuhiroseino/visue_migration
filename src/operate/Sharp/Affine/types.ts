import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Affine`の設定
 */
export type AffineConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.AFFINE;

  matrix: [number, number, number, number] | SharpLib.Matrix2x2;
} & SharpLib.AffineOptions;
