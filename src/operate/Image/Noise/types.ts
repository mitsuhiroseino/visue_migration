import { NoiseType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Noise`の設定
 */
export type NoiseConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.NOISE;

  noiseType: NoiseType | string | number;
};
