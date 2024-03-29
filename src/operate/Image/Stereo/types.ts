import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Stereo`の設定
 */
export type StereoConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.STEREO> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.STEREO;

  // 操作固有の設定
};
