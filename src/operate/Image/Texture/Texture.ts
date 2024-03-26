import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TextureConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Textureのコンフィグ
 * @returns gmのインスタンス
 */
const Texture: ImageManipulation<TextureConfig> = async (state, config) => {
  const { filename } = config;
  return state.texture(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TEXTURE, Texture);
export default Texture;
