import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Process`の設定
 */
export type ProcessConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.PROCESS> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.PROCESS;

  // 操作固有の設定
  command: string;
};
