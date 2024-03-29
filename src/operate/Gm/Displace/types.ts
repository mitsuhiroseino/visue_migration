import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Displace`の設定
 */
export type DisplaceConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.DISPLACE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.DISPLACE;

  // 操作固有の設定
  horizontal: number;
  vertical: number;
};
