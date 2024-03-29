import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Swirl`の設定
 */
export type SwirlConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SWIRL> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SWIRL;

  // 操作固有の設定
  degrees: number;
};
