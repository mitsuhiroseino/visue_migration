import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RaiseConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Raiseのコンフィグ
 * @returns gmのインスタンス
 */
const Raise: ImageManipulation<RaiseConfig> = async (state, config) => {
  const { width, height } = config;
  return state.raise(width, height);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RAISE, Raise);
export default Raise;
