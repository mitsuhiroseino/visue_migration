import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Minify`の設定
 */
export type MinifyConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MINIFY;

  factor: number;
};
