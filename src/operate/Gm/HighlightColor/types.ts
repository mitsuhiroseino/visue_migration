import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`HighlightColor`の設定
 */
export type HighlightColorConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.HIGHLIGHT_COLOR> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.HIGHLIGHT_COLOR;

  // 操作固有の設定
  color: string;
};
