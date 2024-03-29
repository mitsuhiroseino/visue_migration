import { InterlaceType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Interlace`の設定
 */
export type InterlaceConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.INTERLACE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.INTERLACE;

  // 操作固有の設定
  interlaceType: InterlaceType | string;
};
