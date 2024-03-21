import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Blur`の設定
 */
export type BlurConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.BLUR;

  sigma?: number | boolean;
};
