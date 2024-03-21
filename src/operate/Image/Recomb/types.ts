import sharp from 'sharp';

import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Recomb`の設定
 */
export type RecombConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RECOMB;

  inputMatrix: sharp.Matrix3x3;
};
