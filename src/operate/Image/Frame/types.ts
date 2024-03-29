import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Frame`の設定
 */
export type FrameConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.FRAME> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FRAME;

  // 操作固有の設定
  width: number;
  height: number;
  outerBevelWidth: number;
  outBevelHeight: number;
};
