import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Extend`の設定
 */
export type ExtendConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.EXTEND;

  extend?: number;
} & SharpLib.ExtendOptions;
