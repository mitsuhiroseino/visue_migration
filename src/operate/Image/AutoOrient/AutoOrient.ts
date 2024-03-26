import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AutoOrientConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config AutoOrientのコンフィグ
 * @returns gmのインスタンス
 */
const AutoOrient: ImageManipulation<AutoOrientConfig> = async (state, config) => {
  const {} = config;
  return state.autoOrient();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.AUTO_ORIENT, AutoOrient);
export default AutoOrient;
