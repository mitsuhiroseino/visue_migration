import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Bandbool`の設定
 */
export type BandboolConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.BANDBOOL;

  boolOp: keyof SharpLib.BoolEnum;
};
