import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Antialias`の設定
 */
export type AntialiasConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.ANTIALIAS> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.ANTIALIAS;

  // 操作固有の設定
  enable: boolean;
};
