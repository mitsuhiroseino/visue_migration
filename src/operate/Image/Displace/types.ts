import { ImageCallback } from '@jimp/core';
import { Displace } from '@jimp/plugin-displace';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Displace`の設定
 */
export type DisplaceConfig<S = string> = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DISPLACE;

  map: S;
  offset: number;
  callback?: ImageCallback<Displace>;
};
