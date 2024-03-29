import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Bitdepth`の設定
 */
export type BitdepthConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BITDEPTH;

  bits: number;
};
