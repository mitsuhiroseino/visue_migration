import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Magnify`の設定
 */
export type MagnifyConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MAGNIFY> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MAGNIFY;

  // 操作固有の設定
  factor: number;
};
