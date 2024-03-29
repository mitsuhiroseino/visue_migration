import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Strip`の設定
 */
export type StripConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.STRIP> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.STRIP;

  // 操作固有の設定
};
