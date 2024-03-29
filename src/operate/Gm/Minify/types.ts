import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Minify`の設定
 */
export type MinifyConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MINIFY> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MINIFY;

  // 操作固有の設定
  factor: number;
};
