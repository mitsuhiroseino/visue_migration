import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Average`の設定
 */
export type AverageConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.AVERAGE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.AVERAGE;

  // 操作固有の設定
};
