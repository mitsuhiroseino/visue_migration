import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Colors`の設定
 */
export type ColorsConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.COLORS> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COLORS;

  // 操作固有の設定
  colors: number;
};
