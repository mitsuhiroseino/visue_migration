import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Solarize`の設定
 */
export type SolarizeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SOLARIZE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SOLARIZE;

  // 操作固有の設定
  threshold: number;
};
