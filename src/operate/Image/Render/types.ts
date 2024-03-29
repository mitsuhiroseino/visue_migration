import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Render`の設定
 */
export type RenderConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.RENDER> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.RENDER;

  // 操作固有の設定
};
