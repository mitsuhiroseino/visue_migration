import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RepageConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Repageのコンフィグ
 * @returns gmのインスタンス
 */
const Repage: ImageManipulation<RepageConfig> = async (state, config) => {
  const { width, height, xoff, yoff, arg, reset } = config;
  return state.repage(width, height, xoff, yoff, arg, reset);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.REPAGE, Repage);
export default Repage;
