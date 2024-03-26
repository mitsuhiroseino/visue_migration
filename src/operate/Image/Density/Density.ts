import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DensityConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Densityのコンフィグ
 * @returns gmのインスタンス
 */
const Density: ImageManipulation<DensityConfig> = async (state, config) => {
  const { width, height } = config;
  return state.density(width, height);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DENSITY, Density);
export default Density;
