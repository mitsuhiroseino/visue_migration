import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Page`の設定
 */
export type PageConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PAGE;

  width: number;
  height: number;
  arg?: '%' | '!' | '<' | '>' | string;
};
