import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { StereoConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Stereoのコンフィグ
 * @returns gmのインスタンス
 */
const Stereo: ImageManipulation<StereoConfig> = async (state, config) => {
  const {} = config;
  return state.stereo();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.STEREO, Stereo);
export default Stereo;
