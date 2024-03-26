import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AverageConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Averageのコンフィグ
 * @returns gmのインスタンス
 */
const Average: ImageManipulation<AverageConfig> = async (state, config) => {
  const {} = config;
  return state.average();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.AVERAGE, Average);
export default Average;
