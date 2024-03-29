import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Box`の設定
 */
export type BoxConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BOX;

  color: string;
};
