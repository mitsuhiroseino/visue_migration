import { NamedColor } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Channel`の設定
 */
export type ChannelConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.CHANNEL> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.CHANNEL;

  // 操作固有の設定
  channelType: NamedColor | string;
};
