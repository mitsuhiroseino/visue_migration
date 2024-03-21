import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Gamma`の設定
 */
export type GammaConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.GAMMA;

  gamma?: number;
  gammaOut?: number;
};
