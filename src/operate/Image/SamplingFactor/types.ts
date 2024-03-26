import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`SamplingFactor`の設定
 */
export type SamplingFactorConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SAMPLING_FACTOR;

  horizontalFactor: number;
  verticalFactor: number;
};
