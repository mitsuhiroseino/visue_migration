import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Shave`の設定
 */
export type ShaveConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHAVE;

  width: number;
  height: number;
  percent?: boolean;
};
