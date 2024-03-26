import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ListConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Listのコンフィグ
 * @returns gmのインスタンス
 */
const List: ImageManipulation<ListConfig> = async (state, config) => {
  const { type } = config;
  return state.list(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LIST, List);
export default List;
