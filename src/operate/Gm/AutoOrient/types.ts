import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`AutoOrient`の設定
 */
export type AutoOrientConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.AUTO_ORIENT> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.AUTO_ORIENT;

  // 操作固有の設定
};
