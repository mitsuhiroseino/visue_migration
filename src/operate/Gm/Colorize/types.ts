import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Colorize`の設定
 */
export type ColorizeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.COLORIZE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.COLORIZE;

  // 操作固有の設定
  red: number;
  green: number;
  blue: number;
};
