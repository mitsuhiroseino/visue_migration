import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Roll`の設定
 */
export type RollConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.ROLL> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.ROLL;

  // 操作固有の設定
  horizontal: number;
  vertical: number;
};
