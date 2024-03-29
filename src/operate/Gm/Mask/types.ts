import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Mask`の設定
 */
export type MaskConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MASK> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MASK;

  // 操作固有の設定
  filename: string;
};
