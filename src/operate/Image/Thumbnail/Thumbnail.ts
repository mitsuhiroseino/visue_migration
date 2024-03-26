import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ThumbnailConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Thumbnailのコンフィグ
 * @returns gmのインスタンス
 */
const Thumbnail: ImageManipulation<ThumbnailConfig> = async (state, config) => {
  const { width, height, options } = config;
  return state.thumbnail(width, height, options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.THUMBNAIL, Thumbnail);
export default Thumbnail;
