import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Sample`の設定
 */
export type SampleConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SAMPLE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SAMPLE;

  // 操作固有の設定
  geometry: string;
};
