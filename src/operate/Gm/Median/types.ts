import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Median`の設定
 */
export type MedianConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MEDIAN> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MEDIAN;

  // 操作固有の設定
  radius?: number;
};
