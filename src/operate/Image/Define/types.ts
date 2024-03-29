import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Define`の設定
 */
export type DefineConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.DEFINE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DEFINE;

  // 操作固有の設定
  value: string;
};
