import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Snaps`の設定
 */
export type SnapsConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SNAPS;

  count: number;
};
