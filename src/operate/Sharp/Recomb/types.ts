import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Recomb`の設定
 */
export type RecombConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.RECOMB;

  inputMatrix: SharpLib.Matrix3x3;
};
