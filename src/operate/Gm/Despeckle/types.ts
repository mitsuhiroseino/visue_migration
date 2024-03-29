import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Despeckle`の設定
 */
export type DespeckleConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.DESPECKLE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.DESPECKLE;

  // 操作固有の設定
};
