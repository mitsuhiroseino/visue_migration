import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Paint`の設定
 */
export type PaintConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PAINT;

  radius: number;
};
