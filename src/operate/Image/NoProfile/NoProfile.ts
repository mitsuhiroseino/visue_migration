import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { NoProfileConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config NoProfileのコンフィグ
 * @returns gmのインスタンス
 */
const NoProfile: ImageManipulation<NoProfileConfig> = async (state, config) => {
  const {} = config;
  return state.noProfile();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.NO_PROFILE, NoProfile);
export default NoProfile;
