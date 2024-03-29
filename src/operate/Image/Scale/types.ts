import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Scale`の設定
 */
export type ScaleConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SCALE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SCALE;

  // 操作固有の設定
  width: number;
  height: number;
};
