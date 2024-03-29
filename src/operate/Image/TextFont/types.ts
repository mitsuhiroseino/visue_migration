import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`TextFont`の設定
 */
export type TextFontConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.TEXT_FONT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TEXT_FONT;

  // 操作固有の設定
  font: string;
};
