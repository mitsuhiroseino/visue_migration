import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`PointSize`の設定
 */
export type PointSizeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.POINT_SIZE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.POINT_SIZE;

  // 操作固有の設定
  size: number;
};
