import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`IconGeometry`の設定
 */
export type IconGeometryConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.ICON_GEOMETRY> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.ICON_GEOMETRY;

  // 操作固有の設定
  geometry: string;
};
