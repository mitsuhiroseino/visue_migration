import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AntialiasConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Antialiasのコンフィグ
 * @returns gmのインスタンス
 */
const Antialias: ImageManipulation<AntialiasConfig> = async (state, config) => {
  const { enable } = config;
  return state.antialias(enable);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ANTIALIAS, Antialias);
export default Antialias;
