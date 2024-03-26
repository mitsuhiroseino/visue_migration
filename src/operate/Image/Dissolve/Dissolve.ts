import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DissolveConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Dissolveのコンフィグ
 * @returns gmのインスタンス
 */
const Dissolve: ImageManipulation<DissolveConfig> = async (state, config) => {
  const { percent } = config;
  return state.dissolve(percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DISSOLVE, Dissolve);
export default Dissolve;
