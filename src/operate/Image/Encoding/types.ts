import { Encoding } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Encoding`の設定
 */
export type EncodingConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ENCODING;

  encoding: Encoding | string;
};
