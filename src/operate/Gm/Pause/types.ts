import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Pause`の設定
 */
export type PauseConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.PAUSE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.PAUSE;

  // 操作固有の設定
  seconds: number;
};
