import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Affine`の設定
 */
export type AffineConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.AFFINE;

  matrix: string;
};
