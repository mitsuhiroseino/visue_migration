import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`ColorMap`の設定
 */
export type ColorMapConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COLOR_MAP;

  colorMapType: 'shared' | 'private' | string;
};
