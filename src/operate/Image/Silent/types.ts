import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Silent`の設定
 */
export type SilentConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.SILENT> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SILENT;

  // 操作固有の設定
};
