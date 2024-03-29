import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`UsePixmap`の設定
 */
export type UsePixmapConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.USE_PIXMAP> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.USE_PIXMAP;

  // 操作固有の設定
};
