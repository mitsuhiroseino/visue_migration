import { ChannelType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`OrderedDither`の設定
 */
export type OrderedDitherConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.ORDERED_DITHER> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.ORDERED_DITHER;

  // 操作固有の設定
  channelType: ChannelType | string;
  NxN: string;
};
