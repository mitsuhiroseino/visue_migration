import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`WhitePoint`の設定
 */
export type WhitePointConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.WHITE_POINT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.WHITE_POINT;

  // 操作固有の設定
  x: number;
  y: number;
};
