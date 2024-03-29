import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Monochrome`の設定
 */
export type MonochromeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MONOCHROME> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MONOCHROME;

  // 操作固有の設定
};
