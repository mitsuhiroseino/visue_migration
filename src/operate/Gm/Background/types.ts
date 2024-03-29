import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Background`の設定
 */
export type BackgroundConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.BACKGROUND> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.BACKGROUND;

  // 操作固有の設定
  color: string;
};
