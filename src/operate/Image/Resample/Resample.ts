import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ResampleConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Resampleのコンフィグ
 * @returns gmのインスタンス
 */
const Resample: ImageManipulation<ResampleConfig> = async (state, config) => {
  const { horizontal, vertical } = config;
  return state.resample(horizontal, vertical);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RESAMPLE, Resample);
export default Resample;
