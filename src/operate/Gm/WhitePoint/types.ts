import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`WhitePoint`の設定
 */
export type WhitePointConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.WHITE_POINT> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.WHITE_POINT;

  // 操作固有の設定
  x: number;
  y: number;
};
