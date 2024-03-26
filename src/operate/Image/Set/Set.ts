import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SetConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Setのコンフィグ
 * @returns gmのインスタンス
 */
const Set: ImageManipulation<SetConfig> = async (state, config) => {
  const { attribute, value } = config;
  return state.set(attribute, value);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SET, Set);
export default Set;
