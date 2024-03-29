import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Level`の設定
 */
export type LevelConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.LEVEL> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LEVEL;

  // 操作固有の設定
  blackPoint: number;
  gamma: number;
  whitePoint: number;
  percent?: boolean;
};
