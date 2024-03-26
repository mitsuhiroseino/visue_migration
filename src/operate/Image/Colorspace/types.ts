import { ColorSpace } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Colorspace`の設定
 */
export type ColorspaceConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COLORSPACE;

  space: ColorSpace | string;
};
