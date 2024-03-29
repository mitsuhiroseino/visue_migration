import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Snaps`の設定
 */
export type SnapsConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SNAPS> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SNAPS;

  // 操作固有の設定
  count: number;
};
