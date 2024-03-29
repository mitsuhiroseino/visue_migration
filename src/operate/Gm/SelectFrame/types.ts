import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`SelectFrame`の設定
 */
export type SelectFrameConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SELECT_FRAME> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SELECT_FRAME;

  // 操作固有の設定
  frame: number;
};
