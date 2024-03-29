import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Shadow`の設定
 */
export type ShadowConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SHADOW> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHADOW;

  // 操作固有の設定
  radius: number;
  sigma?: number;
};
