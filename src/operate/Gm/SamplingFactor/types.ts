import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`SamplingFactor`の設定
 */
export type SamplingFactorConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SAMPLING_FACTOR> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SAMPLING_FACTOR;

  // 操作固有の設定
  horizontalFactor: number;
  verticalFactor: number;
};
