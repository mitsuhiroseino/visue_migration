import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Define`の設定
 */
export type DefineConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.DEFINE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.DEFINE;

  // 操作固有の設定
  value: string;
};
