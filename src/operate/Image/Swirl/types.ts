import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Swirl`の設定
 */
export type SwirlConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SWIRL;

  degrees: number;
};
