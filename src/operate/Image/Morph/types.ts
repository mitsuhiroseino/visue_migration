import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Blur`の設定
 */
export type MorphConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MORPH;

  otherImg: string | string[];
  outName: string;
  callback?: WriteCallback;
};
