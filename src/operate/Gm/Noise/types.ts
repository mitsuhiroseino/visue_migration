import { NoiseType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Noise`の設定
 */
export type NoiseConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.NOISE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.NOISE;

  // 操作固有の設定
  noiseType: NoiseType | string | number;
};
