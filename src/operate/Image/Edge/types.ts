import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Edge`の設定
 */
export type EdgeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.EDGE;

  radius?: number;
};
