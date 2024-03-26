import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`UsePixmap`の設定
 */
export type UsePixmapConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.USE_PIXMAP;
};
