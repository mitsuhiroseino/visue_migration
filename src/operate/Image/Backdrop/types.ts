import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Backdrop`の設定
 */
export type BackdropConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BACKDROP;
};
