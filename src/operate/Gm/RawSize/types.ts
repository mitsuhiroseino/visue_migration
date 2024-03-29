import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`RawSize`の設定
 */
export type RawSizeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.RAW_SIZE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.RAW_SIZE;

  // 操作固有の設定
  width: number;
  height: number;
  offset?: number;
};