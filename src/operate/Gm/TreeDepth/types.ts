import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`TreeDepth`の設定
 */
export type TreeDepthConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.TREE_DEPTH> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.TREE_DEPTH;

  // 操作固有の設定
  depth: number;
};
