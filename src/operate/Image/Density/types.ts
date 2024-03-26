import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Density`の設定
 */
export type DensityConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DENSITY;

  width: number;
  height: number;
};
