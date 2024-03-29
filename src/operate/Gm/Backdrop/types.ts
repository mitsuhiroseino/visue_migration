import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Backdrop`の設定
 */
export type BackdropConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.BACKDROP> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.BACKDROP;

  // 操作固有の設定
};
