import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulationConfigBase } from '../types';

/**
 * 画像操作`Texture`の設定
 */
export type TextureConfig = ImageManipulationConfigBase<typeof IMAGE_MANIPULATION_TYPE.TEXTURE> & {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TEXTURE;

  // 操作固有の設定
  filename: string;
};
