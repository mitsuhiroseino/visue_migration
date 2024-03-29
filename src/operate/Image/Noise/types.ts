import { NoiseType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Noise`の設定
 */
export type NoiseConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.NOISE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.NOISE;

  // 操作固有の設定
  noiseType: NoiseType | string | number;
};
