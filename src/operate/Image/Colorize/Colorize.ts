import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ColorizeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Colorizeのコンフィグ
 * @returns gmのインスタンス
 */
const Colorize: ImageManipulation<ColorizeConfig> = async (state, config) => {
  const { red, green, blue } = config;
  return state.colorize(red, green, blue);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COLORIZE, Colorize);
export default Colorize;
