import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Background`の設定
 */
export type BackgroundConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.BACKGROUND> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BACKGROUND;

  // 操作固有の設定
  color: string;
};
