import { ImageType } from 'gm';
import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Type`の設定
 */
export type TypeConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.TYPE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.TYPE;

  // 操作固有の設定
  imageType: ImageType | string;
};
