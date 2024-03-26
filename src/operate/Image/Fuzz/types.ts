import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Fuzz`の設定
 */
export type FuzzConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FUZZ;

  distance: number;
  percent?: boolean;
};
