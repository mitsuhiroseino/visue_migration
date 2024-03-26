import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Delay`の設定
 */
export type DelayConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.DELAY;

  centiseconds: number;
};
