import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Montage`の設定
 */
export type MontageConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.MONTAGE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MONTAGE;

  // 操作固有の設定
  otherImg: string;
};
