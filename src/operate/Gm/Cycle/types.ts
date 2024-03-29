import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Cycle`の設定
 */
export type CycleConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.CYCLE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.CYCLE;

  // 操作固有の設定
  amount: number;
};
