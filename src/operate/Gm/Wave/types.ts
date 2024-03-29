import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Wave`の設定
 */
export type WaveConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.WAVE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.WAVE;

  // 操作固有の設定
  amplitude: number;
  wavelength: number;
};
