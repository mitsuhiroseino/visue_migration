import { ResizeOption } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Geometry`の設定
 */
export type GeometryConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GEOMETRY;

  width: number;
  height?: number;
  option?: ResizeOption;
  geometry: string;
};
