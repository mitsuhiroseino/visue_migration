import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Shear`の設定
 */
export type ShearConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SHEAR> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHEAR;

  // 操作固有の設定
  xDegrees: number;
  yDegress: number;
};
