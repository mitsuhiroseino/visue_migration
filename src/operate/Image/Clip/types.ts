import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Clip`の設定
 */
export type ClipConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.CLIP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CLIP;

  // 操作固有の設定
};
