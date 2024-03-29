import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Modulate`の設定
 */
export type ModulateConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MODULATE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MODULATE;

  // 操作固有の設定
  b: number;
  s?: number;
  h?: number;
};
