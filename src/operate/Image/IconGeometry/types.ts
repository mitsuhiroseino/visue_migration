import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`IconGeometry`の設定
 */
export type IconGeometryConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ICON_GEOMETRY;

  geometry: string;
};
