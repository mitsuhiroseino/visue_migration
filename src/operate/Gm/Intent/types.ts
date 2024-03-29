import { IntentType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Intent`の設定
 */
export type IntentConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.INTENT> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.INTENT;

  // 操作固有の設定
  intentType: IntentType | string;
};
