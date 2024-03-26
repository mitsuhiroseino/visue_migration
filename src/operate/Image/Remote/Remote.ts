import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RemoteConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Remoteのコンフィグ
 * @returns gmのインスタンス
 */
const Remote: ImageManipulation<RemoteConfig> = async (state, config) => {
  const {} = config;
  return state.remote();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.REMOTE, Remote);
export default Remote;
