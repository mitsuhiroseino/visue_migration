import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Antialias`の設定
 */
export type AntialiasConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ANTIALIAS;

  enable: boolean;
};
