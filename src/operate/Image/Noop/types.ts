import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Noop`の設定
 */
export type NoopConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.NOOP;
};
