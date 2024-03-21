import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Rotate`の設定
 */
export type RotateConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.ROTATE;

  angle?: number;
} & SharpLib.RotateOptions;
