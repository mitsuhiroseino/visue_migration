import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Ping`の設定
 */
export type PingConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PING;
};
