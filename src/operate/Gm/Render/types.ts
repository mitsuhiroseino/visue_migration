import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Render`の設定
 */
export type RenderConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.RENDER> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.RENDER;

  // 操作固有の設定
};
