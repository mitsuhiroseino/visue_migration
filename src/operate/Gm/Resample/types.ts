import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Resample`の設定
 */
export type ResampleConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.RESAMPLE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.RESAMPLE;

  // 操作固有の設定
  horizontal: number;
  vertical: number;
};
