import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Monochrome`の設定
 */
export type MonochromeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MONOCHROME;
};
