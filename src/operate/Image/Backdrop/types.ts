import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Backdrop`の設定
 */
export type BackdropConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.BACKDROP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BACKDROP;

  // 操作固有の設定
};
