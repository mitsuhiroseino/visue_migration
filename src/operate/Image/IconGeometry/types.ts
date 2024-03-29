import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`IconGeometry`の設定
 */
export type IconGeometryConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.ICON_GEOMETRY> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ICON_GEOMETRY;

  // 操作固有の設定
  geometry: string;
};
