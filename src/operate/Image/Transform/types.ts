import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Transform`の設定
 */
export type TransformConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.TRANSFORM> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TRANSFORM;

  // 操作固有の設定
  color: string;
};
