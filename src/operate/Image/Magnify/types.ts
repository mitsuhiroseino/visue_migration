import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Magnify`の設定
 */
export type MagnifyConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MAGNIFY> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MAGNIFY;

  // 操作固有の設定
  factor: number;
};
