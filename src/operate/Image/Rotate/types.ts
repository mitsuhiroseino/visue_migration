import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Rotate`の設定
 */
export type RotateConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.ROTATE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ROTATE;

  // 操作固有の設定
  backgroundColor: string;
  degrees: number;
};
