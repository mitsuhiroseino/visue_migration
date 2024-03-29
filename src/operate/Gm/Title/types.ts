import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Title`の設定
 */
export type TitleConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.TITLE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.TITLE;

  // 操作固有の設定
  title: string;
};
