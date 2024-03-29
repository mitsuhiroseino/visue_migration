import { EndianType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Endian`の設定
 */
export type EndianConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.ENDIAN> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ENDIAN;

  // 操作固有の設定
  endianType: EndianType | string;
};
