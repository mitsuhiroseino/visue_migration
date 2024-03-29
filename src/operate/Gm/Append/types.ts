import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Append`の設定
 */
export type AppendConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.APPEND> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.APPEND;

  // 操作固有の設定
  image: string | string[];
  ltr?: boolean;
};
