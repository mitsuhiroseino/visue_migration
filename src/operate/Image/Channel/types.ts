import { NamedColor } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Channel`の設定
 */
export type ChannelConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.CHANNEL> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CHANNEL;

  // 操作固有の設定
  channelType: NamedColor | string;
};
