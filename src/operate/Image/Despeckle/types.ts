import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Despeckle`の設定
 */
export type DespeckleConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.DESPECKLE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DESPECKLE;

  // 操作固有の設定
};
