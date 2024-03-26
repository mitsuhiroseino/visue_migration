import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Colorize`の設定
 */
export type ColorizeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COLORIZE;

  red: number;
  green: number;
  blue: number;
};
