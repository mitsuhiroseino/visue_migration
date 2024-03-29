import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Stegano`の設定
 */
export type SteganoConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.STEGANO;

  offset: number;
};
