import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Watermark`の設定
 */
export type WatermarkConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.WATERMARK> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.WATERMARK;

  // 操作固有の設定
  brightness: number;
  saturation: number;
};
