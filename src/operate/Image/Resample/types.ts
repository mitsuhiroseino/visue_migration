import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Resample`の設定
 */
export type ResampleConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.RESAMPLE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RESAMPLE;

  // 操作固有の設定
  horizontal: number;
  vertical: number;
};
