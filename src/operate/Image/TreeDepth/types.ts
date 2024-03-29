import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`TreeDepth`の設定
 */
export type TreeDepthConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.TREE_DEPTH> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TREE_DEPTH;

  // 操作固有の設定
  depth: number;
};
