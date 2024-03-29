import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Flatten`の設定
 */
export type FlattenConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.FLATTEN> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FLATTEN;

  // 操作固有の設定
};
