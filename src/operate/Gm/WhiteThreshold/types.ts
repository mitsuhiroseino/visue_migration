import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`WhiteThreshold`の設定
 */
export type WhiteThresholdConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.WHITE_THRESHOLD> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.WHITE_THRESHOLD;

  // 操作固有の設定
  red: number;
  green: number;
  blue: number;
  opacity?: number;
  intensity: number;
};