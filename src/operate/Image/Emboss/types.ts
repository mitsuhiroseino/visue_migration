import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Emboss`の設定
 */
export type EmbossConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.EMBOSS;

  radius?: number;
};
