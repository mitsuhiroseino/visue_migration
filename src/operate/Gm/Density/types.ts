import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Density`の設定
 */
export type DensityConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.DENSITY> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.DENSITY;

  // 操作固有の設定
  width: number;
  height: number;
};
