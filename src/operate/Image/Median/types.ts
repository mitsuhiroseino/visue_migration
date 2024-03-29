import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Median`の設定
 */
export type MedianConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MEDIAN> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MEDIAN;

  // 操作固有の設定
  radius?: number;
};
