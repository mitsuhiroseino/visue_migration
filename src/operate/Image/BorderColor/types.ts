import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`BorderColor`の設定
 */
export type BorderColorConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.BORDER_COLOR> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BORDER_COLOR;

  // 操作固有の設定
  color: string;
};
