import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Transform`の設定
 */
export type TransformConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TRANSFORM;

  color: string;
};
