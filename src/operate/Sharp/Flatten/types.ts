import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Flatten`の設定
 */
export type FlattenConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.FLATTEN;

  flatten?: boolean;
} & SharpLib.FlattenOptions;
