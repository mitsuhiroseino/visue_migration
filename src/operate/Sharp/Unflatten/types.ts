import { SHARP_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Unflatten`の設定
 */
export type UnflattenConfig = {
  /**
   * 画像操作種別
   */
  type: typeof SHARP_MANIPULATION_TYPE.UNFLATTEN;
};
