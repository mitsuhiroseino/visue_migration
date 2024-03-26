import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ColorMapConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config ColorMapのコンフィグ
 * @returns gmのインスタンス
 */
const ColorMap: ImageManipulation<ColorMapConfig> = async (state, config) => {
  const { type } = config;
  return state.colorMap(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COLOR_MAP, ColorMap);
export default ColorMap;
