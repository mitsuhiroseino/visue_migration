import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Lat`の設定
 */
export type LatConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LAT;

  width: number;
  height: number;
  offset: number;
  percent?: boolean;
};
