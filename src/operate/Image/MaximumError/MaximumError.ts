import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MaximumErrorConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config MaximumErrorのコンフィグ
 * @returns gmのインスタンス
 */
const MaximumError: ImageManipulation<MaximumErrorConfig> = async (state, config) => {
  const { limit } = config;
  return state.maximumError(limit);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MAXIMUM_ERROR, MaximumError);
export default MaximumError;
