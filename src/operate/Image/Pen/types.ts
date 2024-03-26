import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Pen`の設定
 */
export type PenConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PEN;

  color: string;
};
