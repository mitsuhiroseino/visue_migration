import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Box`の設定
 */
export type BoxConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.BOX> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.BOX;

  // 操作固有の設定
  color: string;
};
