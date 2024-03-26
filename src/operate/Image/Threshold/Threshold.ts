import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ThresholdConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Thresholdのコンフィグ
 * @returns gmのインスタンス
 */
const Threshold: ImageManipulation<ThresholdConfig> = async (state, config) => {
  const { value, percent } = config;
  return state.threshold(value, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.THRESHOLD, Threshold);
export default Threshold;
