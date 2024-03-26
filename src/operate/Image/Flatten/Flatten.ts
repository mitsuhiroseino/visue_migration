import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { FlattenConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Flattenのコンフィグ
 * @returns gmのインスタンス
 */
const Flatten: ImageManipulation<FlattenConfig> = async (state, config) => {
  const {} = config;
  return state.flatten();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.FLATTEN, Flatten);
export default Flatten;
