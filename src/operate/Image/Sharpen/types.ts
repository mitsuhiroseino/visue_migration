import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Sharpen`の設定
 */
export type SharpenConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SHARPEN> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SHARPEN;

  // 操作固有の設定
  radius: number;
  sigma?: number;
};
