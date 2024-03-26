import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Remote`の設定
 */
export type RemoteConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.REMOTE;
};
