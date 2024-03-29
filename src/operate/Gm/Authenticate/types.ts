import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Authenticate`の設定
 */
export type AuthenticateConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.AUTHENTICATE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.AUTHENTICATE;

  // 操作固有の設定
  password: string;
};
