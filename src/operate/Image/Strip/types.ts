import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Strip`の設定
 */
export type StripConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.STRIP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.STRIP;

  // 操作固有の設定
};
