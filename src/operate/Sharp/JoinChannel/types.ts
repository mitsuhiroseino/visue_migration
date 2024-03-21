import SharpLib from 'sharp';

import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`JoinChannel`の設定
 */
export type JoinChannelConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.JOIN_CHANNEL;

  images: string | Buffer | ArrayLike<string | Buffer>;
} & SharpLib.SharpOptions;
