import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Shade`の設定
 */
export type ShadeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SHADE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHADE;

  // 操作固有の設定
  azimuth: number;
  elevation: number;
};
