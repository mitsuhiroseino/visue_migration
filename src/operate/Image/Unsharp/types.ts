import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Unsharp`の設定
 */
export type UnsharpConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.UNSHARP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.UNSHARP;

  // 操作固有の設定
  radius: number;
  sigma?: number;
  amount?: number;
  threshold?: number;
};
