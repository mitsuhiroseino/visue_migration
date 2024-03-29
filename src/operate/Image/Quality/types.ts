import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Quality`の設定
 */
export type QualityConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.QUALITY> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.QUALITY;

  // 操作固有の設定
  level: number;
};
