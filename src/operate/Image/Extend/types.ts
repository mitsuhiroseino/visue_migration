import Sharp from 'sharp';

import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Extend`の設定
 */
export type ExtendConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.EXTEND;

  extend?: number;
} & Sharp.ExtendOptions;
