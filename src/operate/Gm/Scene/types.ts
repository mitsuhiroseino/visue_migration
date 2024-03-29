import { GM_MANIPULATION_TYPE } from '../constants';
import { GmManipulationConfigBase } from '../types';

/**
 * 画像操作`Scene`の設定
 */
export type SceneConfig = GmManipulationConfigBase<typeof GM_MANIPULATION_TYPE.SCENE> & {
  /**
   * 画像操作種別
   */
  type: typeof GM_MANIPULATION_TYPE.SCENE;

  // 操作固有の設定
  index: number;
};
