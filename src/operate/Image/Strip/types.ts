import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Strip`の設定
 */
export type StripConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.STRIP;
};
