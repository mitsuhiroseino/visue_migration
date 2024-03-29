import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Convolve`の設定
 */
export type ConvolveConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.CONVOLVE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.CONVOLVE;

  // 操作固有の設定
  kernel: string;
};
