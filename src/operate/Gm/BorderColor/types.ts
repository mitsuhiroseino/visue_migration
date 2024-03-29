import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`BorderColor`の設定
 */
export type BorderColorConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.BORDER_COLOR> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.BORDER_COLOR;

  // 操作固有の設定
  color: string;
};
