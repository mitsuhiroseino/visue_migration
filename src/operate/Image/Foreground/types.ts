import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Foreground`の設定
 */
export type ForegroundConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FOREGROUND;

  color: string;
};
