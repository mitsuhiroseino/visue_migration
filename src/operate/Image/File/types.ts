import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`File`の設定
 */
export type FileConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FILE;

  filename: string;
};
