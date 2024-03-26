import { FilterType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Filter`の設定
 */
export type FilterConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FILTER;

  filterType: FilterType | string;
};
