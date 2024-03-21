import Sharp from 'sharp';

import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Flatten`の設定
 */
export type FlattenConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FLATTEN;

  flatten?: boolean;
} & Sharp.FlattenOptions;
