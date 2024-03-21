import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`RemoveAlpha`の設定
 */
export type RemoveAlphaConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.REMOVE_ALPHA;
};
