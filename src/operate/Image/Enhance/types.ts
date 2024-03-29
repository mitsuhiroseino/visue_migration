import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Enhance`の設定
 */
export type EnhanceConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.ENHANCE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ENHANCE;

  // 操作固有の設定
};
