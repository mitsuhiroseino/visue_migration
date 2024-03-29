import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Monitor`の設定
 */
export type MonitorConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MONITOR> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MONITOR;

  // 操作固有の設定
};
