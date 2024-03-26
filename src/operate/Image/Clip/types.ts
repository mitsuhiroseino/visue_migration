import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Clip`の設定
 */
export type ClipConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CLIP;
};
