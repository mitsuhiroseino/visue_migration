import { Encoding } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Encoding`の設定
 */
export type EncodingConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.ENCODING> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.ENCODING;

  // 操作固有の設定
  encoding: Encoding | string;
};
