import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BlackThresholdConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config BlackThresholdのコンフィグ
 * @returns gmのインスタンス
 */
const BlackThreshold: ImageManipulation<BlackThresholdConfig> = async (state, config) => {
  const { intensity, red, green, blue, opacity } = config;
  return state.blackThreshold(intensity, red, green, blue, opacity);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BLACK_THRESHOLD, BlackThreshold);
export default BlackThreshold;
