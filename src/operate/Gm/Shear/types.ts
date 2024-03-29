import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Shear`の設定
 */
export type ShearConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SHEAR> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SHEAR;

  // 操作固有の設定
  xDegrees: number;
  yDegress: number;
};
