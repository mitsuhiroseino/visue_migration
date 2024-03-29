import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Stegano`の設定
 */
export type SteganoConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.STEGANO> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.STEGANO;

  // 操作固有の設定
  offset: number;
};
