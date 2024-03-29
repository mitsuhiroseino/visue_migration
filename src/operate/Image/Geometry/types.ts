import { ResizeOption } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Geometry`の設定
 */
export type GeometryConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.GEOMETRY> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.GEOMETRY;

  // 操作固有の設定
  width: number;
  height?: number;
  option?: ResizeOption;
  geometry: string;
};
