import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Deconstruct`の設定
 */
export type DeconstructConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.DECONSTRUCT> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.DECONSTRUCT;

  // 操作固有の設定
};
