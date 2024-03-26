import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Scale`の設定
 */
export type ScaleConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SCALE;

  width: number;
  height: number;
};
