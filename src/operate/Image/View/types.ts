import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`View`の設定
 */
export type ViewConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.VIEW> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.VIEW;

  // 操作固有の設定
};
