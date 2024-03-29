import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`MatteColor`の設定
 */
export type MatteColorConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.MATTE_COLOR> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.MATTE_COLOR;

  // 操作固有の設定
  color: string;
};
