import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Flip`の設定
 */
export type FlipConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.FLIP;

  flip?: boolean;
};
