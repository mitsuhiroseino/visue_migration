import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`NoProfile`の設定
 */
export type NoProfileConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.NO_PROFILE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.NO_PROFILE;

  // 操作固有の設定
};
