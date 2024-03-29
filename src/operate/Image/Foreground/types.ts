import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Foreground`の設定
 */
export type ForegroundConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.FOREGROUND> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FOREGROUND;

  // 操作固有の設定
  color: string;
};
