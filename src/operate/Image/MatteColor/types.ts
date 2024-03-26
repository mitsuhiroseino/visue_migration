import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`MatteColor`の設定
 */
export type MatteColorConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MATTE_COLOR;

  color: string;
};
