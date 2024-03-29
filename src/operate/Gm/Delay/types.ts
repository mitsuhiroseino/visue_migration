import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Delay`の設定
 */
export type DelayConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.DELAY> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.DELAY;

  // 操作固有の設定
  centiseconds: number;
};
