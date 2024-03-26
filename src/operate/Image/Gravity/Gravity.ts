import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { GravityConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Gravityのコンフィグ
 * @returns gmのインスタンス
 */
const Gravity: ImageManipulation<GravityConfig> = async (state, config) => {
  const { direction } = config;
  return state.gravity(direction);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GRAVITY, Gravity);
export default Gravity;
