import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Silent`の設定
 */
export type SilentConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SILENT;
};
