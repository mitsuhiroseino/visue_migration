import { IntentType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Intent`の設定
 */
export type IntentConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.INTENT;

  intentType: IntentType | string;
};
