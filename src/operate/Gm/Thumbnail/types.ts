import { ResizeOption } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Thumbnail`の設定
 */
export type ThumbnailConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.THUMBNAIL> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.THUMBNAIL;

  // 操作固有の設定
  width: number;
  height: number;
  options?: ResizeOption;
};
