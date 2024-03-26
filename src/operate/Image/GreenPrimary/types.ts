import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`GreenPrimary`の設定
 */
export type GreenPrimaryConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GREEN_PRIMARY;

  x: number;
  y: number;
};
