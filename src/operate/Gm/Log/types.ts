import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Log`の設定
 */
export type LogConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.LOG> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.LOG;

  // 操作固有の設定
  format: string;
};
