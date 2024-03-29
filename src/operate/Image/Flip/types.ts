import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Flip`の設定
 */
export type FlipConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.FLIP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FLIP;

  // 操作固有の設定
};
