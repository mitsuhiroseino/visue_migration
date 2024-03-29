import { FilterType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Filter`の設定
 */
export type FilterConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.FILTER> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FILTER;

  // 操作固有の設定
  filterType: FilterType | string;
};
