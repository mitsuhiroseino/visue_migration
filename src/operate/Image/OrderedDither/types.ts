import { ChannelType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`OrderedDither`の設定
 */
export type OrderedDitherConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.ORDERED_DITHER> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ORDERED_DITHER;

  // 操作固有の設定
  channelType: ChannelType | string;
  NxN: string;
};
