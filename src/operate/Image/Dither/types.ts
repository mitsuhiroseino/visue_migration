import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Dither`の設定
 */
export type DitherConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DITHER;

  enable?: boolean;
};
