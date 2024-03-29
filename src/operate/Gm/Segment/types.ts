import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Segment`の設定
 */
export type SegmentConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SEGMENT> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SEGMENT;

  // 操作固有の設定
  clustherThreshold: number;
  smoothingThreshold: number;
};
