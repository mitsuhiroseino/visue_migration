import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Negative`の設定
 */
export type NegativeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.NEGATIVE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.NEGATIVE;

  // 操作固有の設定
};
