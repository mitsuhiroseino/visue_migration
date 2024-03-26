import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ColorsConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Colorsのコンフィグ
 * @returns gmのインスタンス
 */
const Colors: ImageManipulation<ColorsConfig> = async (state, config) => {
  const { colors } = config;
  return state.colors(colors);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COLORS, Colors);
export default Colors;
