import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Blur`の設定
 */
export type BlurConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.BLUR> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.BLUR;

  // 操作固有の設定
  radius: number;
  sigma?: number;
};
