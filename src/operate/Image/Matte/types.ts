import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Matte`の設定
 */
export type MatteConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MATTE;
};
