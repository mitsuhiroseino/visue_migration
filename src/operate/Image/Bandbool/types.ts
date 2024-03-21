import Sharp from 'sharp';

import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Bandbool`の設定
 */
export type BandboolConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BANDBOOL;

  boolOp: keyof Sharp.BoolEnum;
};
