import { CompressionType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Compress`の設定
 */
export type CompressConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.COMPRESS> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.COMPRESS;

  // 操作固有の設定
  compressionType: CompressionType | string;
};
