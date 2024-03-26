import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Unsharp`の設定
 */
export type UnsharpConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.UNSHARP;

  radius: number;
  sigma?: number;
  amount?: number;
  threshold?: number;
};
