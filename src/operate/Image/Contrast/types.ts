import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Contrast`の設定
 */
export type ContrastConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.CONTRAST> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CONTRAST;

  // 操作固有の設定
  multiplier: number;
};
