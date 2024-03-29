import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Stegano`の設定
 */
export type SteganoConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.STEGANO> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.STEGANO;

  // 操作固有の設定
  offset: number;
};
