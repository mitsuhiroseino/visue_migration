import { LimitType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Limit`の設定
 */
export type LimitConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.LIMIT> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.LIMIT;

  // 操作固有の設定
  limitType: LimitType | string;
  val: string;
};
