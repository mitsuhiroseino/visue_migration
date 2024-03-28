import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TextureConfig } from './types';

/**
 * テクスチャ
 *
 * 画像にテクスチャを適用することができる。別の画像やパターンを用いて、画像にテクスチャを施す。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-texture
 *
 * @param state gmのインスタンス(ステート)
 * @param config Textureのコンフィグ
 * @returns gmのインスタンス
 */
const Texture: ImageManipulation<TextureConfig> = (state, config) => {
  const { filename } = config;
  return state.texture(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TEXTURE, Texture);
export default Texture;
