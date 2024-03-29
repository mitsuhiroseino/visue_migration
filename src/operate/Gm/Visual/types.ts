import { VisualType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Visual`の設定
 */
export type VisualConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.VISUAL> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.VISUAL;

  // 操作固有の設定
  visualType: VisualType | string;
};
