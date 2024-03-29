import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`GreenPrimary`の設定
 */
export type GreenPrimaryConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.GREEN_PRIMARY> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GREEN_PRIMARY;

  // 操作固有の設定
  x: number;
  y: number;
};
