import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MinifyConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Minifyのコンフィグ
 * @returns gmのインスタンス
 */
const Minify: ImageManipulation<MinifyConfig> = async (state, config) => {
  const { factor } = config;
  return state.minify(factor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MINIFY, Minify);
export default Minify;
