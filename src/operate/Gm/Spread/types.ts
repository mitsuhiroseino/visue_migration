import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Spread`の設定
 */
export type SpreadConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SPREAD> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SPREAD;

  // 操作固有の設定
  amount: number;
};
