import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`BluePrimary`の設定
 */
export type BluePrimaryConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BLUE_PRIMARY;

  x: number;
  y: number;
};
