import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Progress`の設定
 */
export type ProgressConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.PROGRESS> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.PROGRESS;

  // 操作固有の設定
};
