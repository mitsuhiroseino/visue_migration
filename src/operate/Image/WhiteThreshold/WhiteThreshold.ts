import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { WhiteThresholdConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config WhiteThresholdのコンフィグ
 * @returns gmのインスタンス
 */
const WhiteThreshold: ImageManipulation<WhiteThresholdConfig> = async (state, config) => {
  const { red, green, blue, opacity, intensity } = config;
  return state.whiteThreshold(red, green, blue, opacity, intensity);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.WHITE_THRESHOLD, WhiteThreshold);
export default WhiteThreshold;
