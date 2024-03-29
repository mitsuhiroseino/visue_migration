import { Encoding } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Encoding`の設定
 */
export type EncodingConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.ENCODING> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.ENCODING;

  // 操作固有の設定
  encoding: Encoding | string;
};
