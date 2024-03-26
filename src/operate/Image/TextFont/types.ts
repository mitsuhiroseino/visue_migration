import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`TextFont`の設定
 */
export type TextFontConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TEXT_FONT;

  font: string;
};
