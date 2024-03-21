import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Flop`の設定
 */
export type FlopConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.FLOP;

  flop?: boolean;
};
