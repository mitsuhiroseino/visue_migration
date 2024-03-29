import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Raise`の設定
 */
export type RaiseConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.RAISE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.RAISE;

  // 操作固有の設定
  width: number;
  height: number;
};
