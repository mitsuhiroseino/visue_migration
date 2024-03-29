import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Gaussian`の設定
 */
export type GaussianConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.GAUSSIAN> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.GAUSSIAN;

  // 操作固有の設定
  radius: number;
  sigma?: number;
};
