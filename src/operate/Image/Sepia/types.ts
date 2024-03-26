import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Sepia`の設定
 */
export type SepiaConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SEPIA;
};
