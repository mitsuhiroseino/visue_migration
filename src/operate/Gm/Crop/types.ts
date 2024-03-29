import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Crop`の設定
 */
export type CropConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.CROP> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.CROP;

  // 操作固有の設定
  width: number;
  height: number;
  x?: number;
  y?: number;
  percent?: boolean;
};
