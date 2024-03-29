import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`RedPrimary`の設定
 */
export type RedPrimaryConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.RED_PRIMARY> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.RED_PRIMARY;

  // 操作固有の設定
  x: number;
  y: number;
};
