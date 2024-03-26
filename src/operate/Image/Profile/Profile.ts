import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ProfileConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Profileのコンフィグ
 * @returns gmのインスタンス
 */
const Profile: ImageManipulation<ProfileConfig> = async (state, config) => {
  const { filename } = config;
  return state.profile(filename);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PROFILE, Profile);
export default Profile;
