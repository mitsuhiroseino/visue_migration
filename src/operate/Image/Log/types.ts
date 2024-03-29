import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Log`の設定
 */
export type LogConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.LOG> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LOG;

  // 操作固有の設定
  format: string;
};
