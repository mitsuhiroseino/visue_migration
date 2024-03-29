import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Adjoin`の設定
 */
export type AdjoinConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.ADJOIN> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ADJOIN;

  // 操作固有の設定
};
