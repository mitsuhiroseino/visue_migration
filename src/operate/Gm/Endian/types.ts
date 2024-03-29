import { EndianType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Endian`の設定
 */
export type EndianConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.ENDIAN> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.ENDIAN;

  // 操作固有の設定
  endianType: EndianType | string;
};
