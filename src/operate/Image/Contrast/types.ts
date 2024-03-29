import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Contrast`の設定
 */
export type ContrastConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CONTRAST;

  multiplier: number;
};
