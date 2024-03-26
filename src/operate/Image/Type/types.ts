import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Blur`の設定
 */
export type TypeConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TYPE;

  type: ImageType | string;
};
