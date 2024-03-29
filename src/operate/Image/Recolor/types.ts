import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Recolor`の設定
 */
export type RecolorConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.RECOLOR> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RECOLOR;

  // 操作固有の設定
  matrix: string;
};
