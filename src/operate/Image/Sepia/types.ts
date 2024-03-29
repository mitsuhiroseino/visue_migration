import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Sepia`の設定
 */
export type SepiaConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SEPIA> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SEPIA;

  // 操作固有の設定
};
