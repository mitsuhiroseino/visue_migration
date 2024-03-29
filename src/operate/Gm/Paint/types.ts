import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Paint`の設定
 */
export type PaintConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.PAINT> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.PAINT;

  // 操作固有の設定
  radius: number;
};
