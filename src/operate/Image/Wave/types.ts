import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Wave`の設定
 */
export type WaveConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.WAVE;

  amplitude: number;
  wavelength: number;
};
