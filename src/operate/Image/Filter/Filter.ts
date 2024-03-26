import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FilterConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Filterのコンフィグ
 * @returns gmのインスタンス
 */
const Filter: ImageManipulation<FilterConfig> = async (state, config) => {
  const { type } = config;
  return state.filter(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FILTER, Filter);
export default Filter;
