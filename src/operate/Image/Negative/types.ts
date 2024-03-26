import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Negative`の設定
 */
export type NegativeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.NEGATIVE;
};
