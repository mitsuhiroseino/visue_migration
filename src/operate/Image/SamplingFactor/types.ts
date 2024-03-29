import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`SamplingFactor`の設定
 */
export type SamplingFactorConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SAMPLING_FACTOR> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SAMPLING_FACTOR;

  // 操作固有の設定
  horizontalFactor: number;
  verticalFactor: number;
};
