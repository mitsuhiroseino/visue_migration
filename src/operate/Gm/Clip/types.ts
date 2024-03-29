import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Clip`の設定
 */
export type ClipConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.CLIP> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.CLIP;

  // 操作固有の設定
};
