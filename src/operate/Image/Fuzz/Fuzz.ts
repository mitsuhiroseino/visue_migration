import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FuzzConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Fuzzのコンフィグ
 * @returns gmのインスタンス
 */
const Fuzz: ImageManipulation<FuzzConfig> = async (state, config) => {
  const { distance, percent } = config;
  return state.fuzz(distance, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FUZZ, Fuzz);
export default Fuzz;
