import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Negate`の設定
 */
export type NegateConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.NEGATE;

  negate?: boolean;
} & SharpLib.NegateOptions;
