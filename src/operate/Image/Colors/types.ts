import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Colors`の設定
 */
export type ColorsConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COLORS;

  colors: number;
};
