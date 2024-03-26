import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Sharpen`の設定
 */
export type SharpenConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHARPEN;

  radius: number;
  sigma?: number;
};
