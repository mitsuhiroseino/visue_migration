import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`ColorMap`の設定
 */
export type ColorMapConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.COLOR_MAP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COLOR_MAP;

  // 操作固有の設定
  colorMapType: 'shared' | 'private' | string;
};
