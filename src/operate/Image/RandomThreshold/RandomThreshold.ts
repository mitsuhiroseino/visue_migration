import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RandomThresholdConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config RandomThresholdのコンフィグ
 * @returns gmのインスタンス
 */
const RandomThreshold: ImageManipulation<RandomThresholdConfig> = async (state, config) => {
  const { channelType, LOWxHIGH } = config;
  return state.randomThreshold(channelType, LOWxHIGH);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RANDOM_THRESHOLD, RandomThreshold);
export default RandomThreshold;
