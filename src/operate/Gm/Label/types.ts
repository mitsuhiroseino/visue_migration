import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Label`の設定
 */
export type LabelConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.LABEL> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.LABEL;

  // 操作固有の設定
  name: string;
};
