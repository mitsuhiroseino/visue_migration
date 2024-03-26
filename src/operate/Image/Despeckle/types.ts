import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Despeckle`の設定
 */
export type DespeckleConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DESPECKLE;
};
