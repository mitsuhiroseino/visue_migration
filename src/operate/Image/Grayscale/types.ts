import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Grayscale`の設定
 */
export type GrayscaleConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GRAYSCALE;

  grayscale?: boolean;
};
