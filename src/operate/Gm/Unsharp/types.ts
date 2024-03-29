import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Unsharp`の設定
 */
export type UnsharpConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.UNSHARP> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.UNSHARP;

  // 操作固有の設定
  radius: number;
  sigma?: number;
  amount?: number;
  threshold?: number;
};
