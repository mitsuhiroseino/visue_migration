import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Grayscale`の設定
 */
export type GrayscaleConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.GRAYSCALE;

  grayscale?: boolean;
};
