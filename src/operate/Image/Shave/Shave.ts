import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ShaveConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Shaveのコンフィグ
 * @returns gmのインスタンス
 */
const Shave: ImageManipulation<ShaveConfig> = async (state, config) => {
  const { width, height, percent } = config;
  return state.shave(width, height, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SHAVE, Shave);
export default Shave;
