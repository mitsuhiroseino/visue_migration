import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Matte`の設定
 */
export type MatteConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MATTE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MATTE;

  // 操作固有の設定
};
