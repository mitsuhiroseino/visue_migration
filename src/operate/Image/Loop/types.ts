import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Loop`の設定
 */
export type LoopConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.LOOP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.LOOP;

  // 操作固有の設定
  iterations: number;
};
