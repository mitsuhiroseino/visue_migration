import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Shade`の設定
 */
export type ShadeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SHADE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SHADE;

  // 操作固有の設定
  azimuth: number;
  elevation: number;
};
