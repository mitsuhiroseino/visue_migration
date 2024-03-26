import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NoiseConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Noiseのコンフィグ
 * @returns gmのインスタンス
 */
const Noise: ImageManipulation<NoiseConfig> = async (state, config) => {
  const { type } = config;
  return state.noise(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NOISE, Noise);
export default Noise;
