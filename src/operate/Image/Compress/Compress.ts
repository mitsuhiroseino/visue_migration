import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CompressConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Compressのコンフィグ
 * @returns gmのインスタンス
 */
const Compress: ImageManipulation<CompressConfig> = async (state, config) => {
  const { type } = config;
  return state.compress(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COMPRESS, Compress);
export default Compress;
