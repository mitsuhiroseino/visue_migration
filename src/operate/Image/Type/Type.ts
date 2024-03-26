import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TypeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Typeのコンフィグ
 * @returns gmのインスタンス
 */
const Type: ImageManipulation<TypeConfig> = async (state, config) => {
  const { type } = config;
  return state.type(type);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TYPE, Type);
export default Type;
