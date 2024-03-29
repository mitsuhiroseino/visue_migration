import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Pause`の設定
 */
export type PauseConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.PAUSE;

  seconds: number;
};
