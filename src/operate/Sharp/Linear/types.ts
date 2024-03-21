import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Linear`の設定
 */
export type LinearConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.LINEAR;

  multiplier?: number | number[] | null;
  offset?: number | number[];
};
