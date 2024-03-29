import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Lower`の設定
 */
export type LowerConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.LOWER> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LOWER;

  // 操作固有の設定
  width: number;
  height: number;
};
