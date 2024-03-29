import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Delay`の設定
 */
export type DelayConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.DELAY> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DELAY;

  // 操作固有の設定
  centiseconds: number;
};
