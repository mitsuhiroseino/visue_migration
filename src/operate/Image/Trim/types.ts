import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Trim`の設定
 */
export type TrimConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.TRIM> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TRIM;

  // 操作固有の設定
};
