import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Normalize`の設定
 */
export type NormalizeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.NORMALIZE;
} & SharpLib.NormaliseOptions;
