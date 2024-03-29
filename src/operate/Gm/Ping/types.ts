import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Ping`の設定
 */
export type PingConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.PING> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.PING;

  // 操作固有の設定
};
