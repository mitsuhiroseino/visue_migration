import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Opaque`の設定
 */
export type OpaqueConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.OPAQUE;

  color: string;
};
