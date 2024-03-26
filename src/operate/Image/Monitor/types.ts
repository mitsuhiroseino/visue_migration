import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Monitor`の設定
 */
export type MonitorConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MONITOR;
};
