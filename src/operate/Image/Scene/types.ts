import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Scene`の設定
 */
export type SceneConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.SCENE;

  index: number;
};
