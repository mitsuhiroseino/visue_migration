import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`ExtractChannel`の設定
 */
export type ExtractChannelConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.EXTRACT_CHANNEL;

  channel: 0 | 1 | 2 | 3 | 'red' | 'green' | 'blue' | 'alpha';
};
