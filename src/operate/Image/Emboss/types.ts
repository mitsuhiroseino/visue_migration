import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Emboss`の設定
 */
export type EmbossConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.EMBOSS> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.EMBOSS;

  // 操作固有の設定
  radius?: number;
};
