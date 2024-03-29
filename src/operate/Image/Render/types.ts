import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Render`の設定
 */
export type RenderConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RENDER;
};
