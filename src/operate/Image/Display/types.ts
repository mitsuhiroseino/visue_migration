import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Display`の設定
 */
export type DisplayConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DISPLAY;

  xServer: string;
};
