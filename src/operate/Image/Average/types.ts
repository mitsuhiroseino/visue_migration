import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Average`の設定
 */
export type AverageConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.AVERAGE;
};
