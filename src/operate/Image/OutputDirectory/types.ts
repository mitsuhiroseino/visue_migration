import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`OutputDirectory`の設定
 */
export type OutputDirectoryConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.OUTPUT_DIRECTORY;

  directory: string;
};