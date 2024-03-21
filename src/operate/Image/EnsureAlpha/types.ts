import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`EnsureAlpha`の設定
 */
export type EnsureAlphaConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ENSURE_ALPHA;

  alpha?: number;
};
