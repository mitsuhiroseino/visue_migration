import { VisualType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Visual`の設定
 */
export type VisualConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.VISUAL> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.VISUAL;

  // 操作固有の設定
  visualType: VisualType | string;
};
