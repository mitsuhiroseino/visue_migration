import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MagnifyConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Magnifyのコンフィグ
 * @returns gmのインスタンス
 */
const Magnify: ImageManipulation<MagnifyConfig> = async (state, config) => {
  const { factor } = config;
  return state.magnify(factor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MAGNIFY, Magnify);
export default Magnify;
