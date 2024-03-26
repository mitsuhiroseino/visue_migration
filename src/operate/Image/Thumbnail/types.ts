import { ResizeOption } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Thumbnail`の設定
 */
export type ThumbnailConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.THUMBNAIL;

  width: number;
  height: number;
  options?: ResizeOption;
};
