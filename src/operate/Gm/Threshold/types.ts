import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Threshold`の設定
 */
export type ThresholdConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.THRESHOLD> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.THRESHOLD;

  // 操作固有の設定
  value: number;
  percent?: boolean;
};
