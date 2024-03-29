import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Dither`の設定
 */
export type DitherConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.DITHER> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DITHER;

  // 操作固有の設定
  enable?: boolean;
};
