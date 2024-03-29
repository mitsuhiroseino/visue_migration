import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`AutoOrient`の設定
 */
export type AutoOrientConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.AUTO_ORIENT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.AUTO_ORIENT;

  // 操作固有の設定
};
