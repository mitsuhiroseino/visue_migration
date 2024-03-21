import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Greyscale`の設定
 */
export type GreyscaleConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.GREYSCALE;

  greyscale?: boolean;
};
