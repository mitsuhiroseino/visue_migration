import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { UpdateConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Updateのコンフィグ
 * @returns gmのインスタンス
 */
const Update: ImageManipulation<UpdateConfig> = async (state, config) => {
  const { seconds } = config;
  return state.update(seconds);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.UPDATE, Update);
export default Update;
