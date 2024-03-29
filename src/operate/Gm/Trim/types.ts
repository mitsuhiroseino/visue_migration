import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Trim`の設定
 */
export type TrimConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.TRIM> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.TRIM;

  // 操作固有の設定
};
