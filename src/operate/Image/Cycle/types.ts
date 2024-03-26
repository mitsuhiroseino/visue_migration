import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Cycle`の設定
 */
export type CycleConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CYCLE;

  amount: number;
};
