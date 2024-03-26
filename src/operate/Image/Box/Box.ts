import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BoxConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Boxのコンフィグ
 * @returns gmのインスタンス
 */
const Box: ImageManipulation<BoxConfig> = async (state, config) => {
  const { color } = config;
  return state.box(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BOX, Box);
export default Box;
