import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Roll`の設定
 */
export type RollConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.ROLL> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ROLL;

  // 操作固有の設定
  horizontal: number;
  vertical: number;
};
