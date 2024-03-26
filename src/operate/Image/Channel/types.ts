import { NamedColor } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Channel`の設定
 */
export type ChannelConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CHANNEL;

  channelType: NamedColor | string;
};
