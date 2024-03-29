import { IntentType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Intent`の設定
 */
export type IntentConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.INTENT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.INTENT;

  // 操作固有の設定
  intentType: IntentType | string;
};
