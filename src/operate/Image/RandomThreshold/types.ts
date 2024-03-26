import { ChannelType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`RandomThreshold`の設定
 */
export type RandomThresholdConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RANDOM_THRESHOLD;

  channelType: ChannelType;
  LOWxHIGH: string;
};
