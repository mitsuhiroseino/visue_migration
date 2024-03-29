import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Mask`の設定
 */
export type MaskConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MASK> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MASK;

  // 操作固有の設定
  filename: string;
};
