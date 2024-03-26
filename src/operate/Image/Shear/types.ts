import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Shear`の設定
 */
export type ShearConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHEAR;

  xDegrees: number;
  yDegress: number;
};
