import { InterlaceType } from 'gm';
import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Interlace`の設定
 */
export type InterlaceConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.INTERLACE;

  interlaceType: InterlaceType | string;
};
