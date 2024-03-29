import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Flop`の設定
 */
export type FlopConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.FLOP> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.FLOP;

  // 操作固有の設定
};
