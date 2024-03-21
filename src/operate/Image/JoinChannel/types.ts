import Sharp from 'sharp';

import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`JoinChannel`の設定
 */
export type JoinChannelConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.JOIN_CHANNEL;

  images: string | Buffer | ArrayLike<string | Buffer>;
} & Sharp.SharpOptions;
