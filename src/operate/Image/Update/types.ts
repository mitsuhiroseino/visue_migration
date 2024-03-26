import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Update`の設定
 */
export type UpdateConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.UPDATE;

  seconds: number;
};
