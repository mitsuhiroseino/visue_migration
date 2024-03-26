import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Window`の設定
 */
export type WindowConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.WINDOW;

  id: string;
};
