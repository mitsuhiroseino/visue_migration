import { VirtualPixelMethod } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`VirtualPixel`の設定
 */
export type VirtualPixelConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.VIRTUAL_PIXEL> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.VIRTUAL_PIXEL;

  // 操作固有の設定
  method: VirtualPixelMethod | string;
};
