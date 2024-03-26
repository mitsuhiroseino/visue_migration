import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Border`の設定
 */
export type BorderConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BORDER;

  width: number;
  height: number;
};
