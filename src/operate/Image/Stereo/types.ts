import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Stereo`の設定
 */
export type StereoConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.STEREO;
};
