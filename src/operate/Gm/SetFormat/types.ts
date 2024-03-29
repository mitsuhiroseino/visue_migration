import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`SetFormat`の設定
 */
export type SetFormatConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SET_FORMAT> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SET_FORMAT;

  // 操作固有の設定
  format: string;
};
