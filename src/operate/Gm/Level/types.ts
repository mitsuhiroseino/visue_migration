import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Level`の設定
 */
export type LevelConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.LEVEL> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.LEVEL;

  // 操作固有の設定
  blackPoint: number;
  gamma: number;
  whitePoint: number;
  percent?: boolean;
};
