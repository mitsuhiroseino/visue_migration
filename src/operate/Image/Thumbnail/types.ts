import { ResizeOption } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Thumbnail`の設定
 */
export type ThumbnailConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.THUMBNAIL> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.THUMBNAIL;

  // 操作固有の設定
  width: number;
  height: number;
  options?: ResizeOption;
};
