import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Enhance`の設定
 */
export type EnhanceConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ENHANCE;
};
