import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Log`の設定
 */
export type LogConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LOG;

  format: string;
};
