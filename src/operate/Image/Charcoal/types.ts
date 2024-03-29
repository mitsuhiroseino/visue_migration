import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Charcoal`の設定
 */
export type CharcoalConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.CHARCOAL> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.CHARCOAL;

  // 操作固有の設定
  factor: number;
};
