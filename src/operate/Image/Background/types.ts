import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Background`の設定
 */
export type BackgroundConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BACKGROUND;

  color: string;
};
