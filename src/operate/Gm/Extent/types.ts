import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Extent`の設定
 */
export type ExtentConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.EXTENT> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.EXTENT;

  // 操作固有の設定
  width: number;
  height: number;
  options?: string;
};
