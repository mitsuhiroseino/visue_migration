import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Set`の設定
 */
export type SetConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SET> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SET;

  // 操作固有の設定
  attribute: string;
  value: string;
};
