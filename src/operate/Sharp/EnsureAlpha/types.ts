import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`EnsureAlpha`の設定
 */
export type EnsureAlphaConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.ENSURE_ALPHA;

  alpha?: number;
};
