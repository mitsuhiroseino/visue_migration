import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Fuzz`の設定
 */
export type FuzzConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.FUZZ> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.FUZZ;

  // 操作固有の設定
  distance: number;
  percent?: boolean;
};
