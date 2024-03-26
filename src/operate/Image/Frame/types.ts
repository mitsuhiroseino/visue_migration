import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Frame`の設定
 */
export type FrameConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.FRAME;

  width: number;
  height: number;
  outerBevelWidth: number;
  outBevelHeight: number;
};
