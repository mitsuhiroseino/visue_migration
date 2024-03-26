import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { LatConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Latのコンフィグ
 * @returns gmのインスタンス
 */
const Lat: ImageManipulation<LatConfig> = async (state, config) => {
  const { width, height, offset, percent } = config;
  return state.lat(width, height, offset, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.LAT, Lat);
export default Lat;
