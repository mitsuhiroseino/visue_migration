import { IMAGE_MANIPULATION_TYPE } from '../constants';

/**
 * 画像操作`Texture`の設定
 */
export type TextureConfig = {
  /**
   * 画像操作種別
   */
  type: typeof IMAGE_MANIPULATION_TYPE.TEXTURE;

  filename: string;
};
