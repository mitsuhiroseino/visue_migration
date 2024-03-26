import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`MaximumError`の設定
 */
export type MaximumErrorConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MAXIMUM_ERROR;

  limit: number;
};
