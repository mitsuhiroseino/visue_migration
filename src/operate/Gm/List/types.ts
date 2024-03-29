import { ListType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`List`の設定
 */
export type ListConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.LIST> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.LIST;

  // 操作固有の設定
  listType: ListType | string;
};
