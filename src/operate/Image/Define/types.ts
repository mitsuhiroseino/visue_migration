import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Define`の設定
 */
export type DefineConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DEFINE;

  value: string;
};
