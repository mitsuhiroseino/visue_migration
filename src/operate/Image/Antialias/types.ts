import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Antialias`の設定
 */
export type AntialiasConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.ANTIALIAS> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ANTIALIAS;

  // 操作固有の設定
  enable: boolean;
};
