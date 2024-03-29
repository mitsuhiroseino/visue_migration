import { ColorSpace } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Colorspace`の設定
 */
export type ColorspaceConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.COLORSPACE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.COLORSPACE;

  // 操作固有の設定
  space: ColorSpace | string;
};
