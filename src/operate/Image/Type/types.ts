import { ImageType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Type`の設定
 */
export type TypeConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.TYPE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TYPE;

  // 操作固有の設定
  imageType: ImageType | string;
};
