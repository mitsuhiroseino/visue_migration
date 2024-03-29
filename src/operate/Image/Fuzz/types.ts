import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Fuzz`の設定
 */
export type FuzzConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.FUZZ> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FUZZ;

  // 操作固有の設定
  distance: number;
  percent?: boolean;
};
