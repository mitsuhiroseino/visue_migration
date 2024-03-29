import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`MaximumError`の設定
 */
export type MaximumErrorConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MAXIMUM_ERROR> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MAXIMUM_ERROR;

  // 操作固有の設定
  limit: number;
};
