import { ChannelType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`RandomThreshold`の設定
 */
export type RandomThresholdConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.RANDOM_THRESHOLD> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.RANDOM_THRESHOLD;

  // 操作固有の設定
  channelType: ChannelType;
  LOWxHIGH: string;
};
