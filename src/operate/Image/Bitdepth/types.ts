import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Bitdepth`の設定
 */
export type BitdepthConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.BITDEPTH> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BITDEPTH;

  // 操作固有の設定
  bits: number;
};
