import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Frame`の設定
 */
export type FrameConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.FRAME> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.FRAME;

  // 操作固有の設定
  width: number;
  height: number;
  outerBevelWidth: number;
  outBevelHeight: number;
};
