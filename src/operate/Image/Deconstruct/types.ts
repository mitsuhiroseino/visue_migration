import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Deconstruct`の設定
 */
export type DeconstructConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.DECONSTRUCT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DECONSTRUCT;

  // 操作固有の設定
};
