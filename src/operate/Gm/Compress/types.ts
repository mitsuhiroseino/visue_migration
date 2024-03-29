import { CompressionType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Compress`の設定
 */
export type CompressConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.COMPRESS> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.COMPRESS;

  // 操作固有の設定
  compressionType: CompressionType | string;
};
