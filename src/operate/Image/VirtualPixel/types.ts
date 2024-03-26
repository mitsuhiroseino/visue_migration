import { VirtualPixelMethod } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`VirtualPixel`の設定
 */
export type VirtualPixelConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.VIRTUAL_PIXEL;

  method: VirtualPixelMethod | string;
};
