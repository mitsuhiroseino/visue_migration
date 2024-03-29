import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Edge`の設定
 */
export type EdgeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.EDGE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.EDGE;

  // 操作固有の設定
  radius?: number;
};
