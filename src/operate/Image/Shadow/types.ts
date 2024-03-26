import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Shadow`の設定
 */
export type ShadowConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHADOW;

  radius: number;
  sigma?: number;
};
