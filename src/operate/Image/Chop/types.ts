import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Chop`の設定
 */
export type ChopConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CHOP;

  width: number;
  height: number;
  x?: number;
  y?: number;
};
