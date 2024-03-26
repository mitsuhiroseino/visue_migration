import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ConvolveConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Convolveのコンフィグ
 * @returns gmのインスタンス
 */
const Convolve: ImageManipulation<ConvolveConfig> = async (state, config) => {
  const { kernel } = config;
  return state.convolve(kernel);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CONVOLVE, Convolve);
export default Convolve;
