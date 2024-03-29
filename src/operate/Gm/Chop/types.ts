import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Chop`の設定
 */
export type ChopConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.CHOP> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.CHOP;

  // 操作固有の設定
  width: number;
  height: number;
  x?: number;
  y?: number;
};
