import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Sepia`の設定
 */
export type SepiaConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SEPIA> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SEPIA;

  // 操作固有の設定
};
