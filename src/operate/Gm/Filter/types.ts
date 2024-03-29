import { FilterType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Filter`の設定
 */
export type FilterConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.FILTER> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.FILTER;

  // 操作固有の設定
  filterType: FilterType | string;
};
