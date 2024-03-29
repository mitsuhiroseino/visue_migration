import { ListType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`List`の設定
 */
export type ListConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.LIST> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LIST;

  // 操作固有の設定
  listType: ListType | string;
};
