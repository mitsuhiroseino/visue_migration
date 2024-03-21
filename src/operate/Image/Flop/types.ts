import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Flop`の設定
 */
export type FlopConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FLOP;

  flop?: boolean;
};
