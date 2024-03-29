import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Border`の設定
 */
export type BorderConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.BORDER> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BORDER;

  // 操作固有の設定
  width: number;
  height: number;
};
