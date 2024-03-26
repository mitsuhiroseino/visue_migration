import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { InConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Inのコンフィグ
 * @returns gmのインスタンス
 */
const In: ImageManipulation<InConfig> = async (state, config) => {
  const { customArguments } = config;
  return state.in(customArguments);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.IN, In);
export default In;
