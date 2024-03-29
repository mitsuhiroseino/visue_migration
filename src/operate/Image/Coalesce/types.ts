import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Coalesce`の設定
 */
export type CoalesceConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COALESCE;
};
