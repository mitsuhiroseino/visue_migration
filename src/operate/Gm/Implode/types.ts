import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Implode`の設定
 */
export type ImplodeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.IMPLODE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.IMPLODE;

  // 操作固有の設定
  factor?: number;
};
