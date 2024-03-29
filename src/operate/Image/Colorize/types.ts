import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Colorize`の設定
 */
export type ColorizeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.COLORIZE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COLORIZE;

  // 操作固有の設定
  red: number;
  green: number;
  blue: number;
};
