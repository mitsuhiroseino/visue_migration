import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Loop`の設定
 */
export type LoopConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LOOP;

  iterations: number;
};
