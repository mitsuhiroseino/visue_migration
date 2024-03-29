import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Extent`の設定
 */
export type ExtentConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.EXTENT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.EXTENT;

  // 操作固有の設定
  width: number;
  height: number;
  options?: string;
};
