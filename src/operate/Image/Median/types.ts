import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Median`の設定
 */
export type MedianConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MEDIAN;

  radius?: number;
};
