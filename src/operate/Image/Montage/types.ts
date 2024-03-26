import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Montage`の設定
 */
export type MontageConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.MONTAGE;

  otherImg: string;
};
