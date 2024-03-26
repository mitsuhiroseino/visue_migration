import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Level`の設定
 */
export type LevelConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LEVEL;

  blackPoint: number;
  gamma: number;
  whitePoint: number;
  percent?: boolean;
};
