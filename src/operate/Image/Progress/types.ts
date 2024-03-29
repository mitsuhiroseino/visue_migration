import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Progress`の設定
 */
export type ProgressConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.PROGRESS> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PROGRESS;

  // 操作固有の設定
};
