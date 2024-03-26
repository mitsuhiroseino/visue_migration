import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Gamma`の設定
 */
export type GammaConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GAMMA;

  r: number;
  g: number;
  b: number;
};
