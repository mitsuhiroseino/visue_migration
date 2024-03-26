import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MedianConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Medianのコンフィグ
 * @returns gmのインスタンス
 */
const Median: ImageManipulation<MedianConfig> = async (state, config) => {
  const { radius } = config;
  return state.median(radius);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MEDIAN, Median);
export default Median;
