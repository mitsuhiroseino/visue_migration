import { GravityDirection } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Gravity`の設定
 */
export type GravityConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.GRAVITY> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.GRAVITY;

  // 操作固有の設定
  direction: GravityDirection | string;
};
