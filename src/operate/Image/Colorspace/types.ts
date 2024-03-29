import { ColorSpace } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Colorspace`の設定
 */
export type ColorspaceConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.COLORSPACE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COLORSPACE;

  // 操作固有の設定
  space: ColorSpace | string;
};
