import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Gamma`の設定
 */
export type GammaConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.GAMMA> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GAMMA;

  // 操作固有の設定
  r: number;
  g: number;
  b: number;
};
