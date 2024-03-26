import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SwirlConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Swirlのコンフィグ
 * @returns gmのインスタンス
 */
const Swirl: ImageManipulation<SwirlConfig> = async (state, config) => {
  const { degrees } = config;
  return state.swirl(degrees);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SWIRL, Swirl);
export default Swirl;
