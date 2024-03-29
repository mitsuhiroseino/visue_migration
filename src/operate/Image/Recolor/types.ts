import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Recolor`の設定
 */
export type RecolorConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RECOLOR;

  matrix: string;
};
