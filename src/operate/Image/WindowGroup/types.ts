import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`WindowGroup`の設定
 */
export type WindowGroupConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.WINDOW_GROUP;
};
