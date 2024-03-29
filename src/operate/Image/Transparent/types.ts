import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Transparent`の設定
 */
export type TransparentConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.TRANSPARENT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TRANSPARENT;

  // 操作固有の設定
  color: string;
};
