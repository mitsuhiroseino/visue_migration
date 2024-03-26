import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RegionConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Regionのコンフィグ
 * @returns gmのインスタンス
 */
const Region: ImageManipulation<RegionConfig> = async (state, config) => {
  const { width, height, x, y } = config;
  return state.region(width, height, x, y);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.REGION, Region);
export default Region;
