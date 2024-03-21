import sharp from 'sharp';

import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Boolean`の設定
 */
export type BooleanConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BOOLEAN;

  operand: string | Buffer;
  operator: keyof sharp.BoolEnum;
  raw?: sharp.Raw;
};
