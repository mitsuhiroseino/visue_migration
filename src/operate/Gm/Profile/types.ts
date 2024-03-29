import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Profile`の設定
 */
export type ProfileConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.PROFILE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.PROFILE;

  // 操作固有の設定
  filename: string;
};
