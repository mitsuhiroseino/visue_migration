import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Scenes`の設定
 */
export type ScenesConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SCENES;

  start: number;
  end: number;
};
