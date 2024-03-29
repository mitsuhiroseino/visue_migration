import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Spread`の設定
 */
export type SpreadConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SPREAD> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SPREAD;

  // 操作固有の設定
  amount: number;
};
