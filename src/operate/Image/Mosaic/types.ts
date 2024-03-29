import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Mosaic`の設定
 */
export type MosaicConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MOSAIC> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MOSAIC;

  // 操作固有の設定
};
