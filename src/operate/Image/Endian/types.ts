import { EndianType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Endian`の設定
 */
export type EndianConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ENDIAN;

  endianType: EndianType | string;
};
