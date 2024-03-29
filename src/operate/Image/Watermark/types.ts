import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Watermark`の設定
 */
export type WatermarkConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.WATERMARK> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.WATERMARK;

  // 操作固有の設定
  brightness: number;
  saturation: number;
};
