import { InterlaceType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Interlace`の設定
 */
export type InterlaceConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.INTERLACE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.INTERLACE;

  // 操作固有の設定
  interlaceType: InterlaceType | string;
};
