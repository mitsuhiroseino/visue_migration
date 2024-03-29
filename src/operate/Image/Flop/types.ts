import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Flop`の設定
 */
export type FlopConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.FLOP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FLOP;

  // 操作固有の設定
};
