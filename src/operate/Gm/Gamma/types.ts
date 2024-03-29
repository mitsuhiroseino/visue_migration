import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Gamma`の設定
 */
export type GammaConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.GAMMA> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.GAMMA;

  // 操作固有の設定
  r: number;
  g: number;
  b: number;
};
