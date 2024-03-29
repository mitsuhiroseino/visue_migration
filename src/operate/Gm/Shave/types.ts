import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Shave`の設定
 */
export type ShaveConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SHAVE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SHAVE;

  // 操作固有の設定
  width: number;
  height: number;
  percent?: boolean;
};
