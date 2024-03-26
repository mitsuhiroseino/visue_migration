import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PauseConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Pauseのコンフィグ
 * @returns gmのインスタンス
 */
const Pause: ImageManipulation<PauseConfig> = async (state, config) => {
  const { seconds } = config;
  return state.pause(seconds);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PAUSE, Pause);
export default Pause;
