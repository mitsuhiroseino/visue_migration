import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Unflatten`の設定
 */
export type UnflattenConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.UNFLATTEN;
};
