import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Recolor`の設定
 */
export type RecolorConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.RECOLOR> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.RECOLOR;

  // 操作固有の設定
  matrix: string;
};
