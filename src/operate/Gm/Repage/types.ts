import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Repage`の設定
 */
export type RepageConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.REPAGE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.REPAGE;

  // 操作固有の設定
  width: number;
  height: number;
  xoff: number;
  yoff: number;
  arg?: string;
  reset: '+' | string;
};
