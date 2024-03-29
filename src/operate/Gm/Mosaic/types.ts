import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Mosaic`の設定
 */
export type MosaicConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MOSAIC> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MOSAIC;

  // 操作固有の設定
};
