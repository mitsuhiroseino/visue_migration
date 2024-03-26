import { CompressionType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Compress`の設定
 */
export type CompressConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COMPRESS;

  compressionType: CompressionType | string;
};
