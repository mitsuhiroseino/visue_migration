import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ProgressConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Progressのコンフィグ
 * @returns gmのインスタンス
 */
const Progress: ImageManipulation<ProgressConfig> = async (state, config) => {
  const {} = config;
  return state.progress();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PROGRESS, Progress);
export default Progress;
