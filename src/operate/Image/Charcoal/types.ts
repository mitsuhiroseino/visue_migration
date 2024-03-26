import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Charcoal`の設定
 */
export type CharcoalConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CHARCOAL;

  factor: number;
};
