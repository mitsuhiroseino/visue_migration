import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Cycle`の設定
 */
export type CycleConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.CYCLE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CYCLE;

  // 操作固有の設定
  amount: number;
};
