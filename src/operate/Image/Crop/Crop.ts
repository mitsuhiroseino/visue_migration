import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CropConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Cropのコンフィグ
 * @returns gmのインスタンス
 */
const Crop: ImageManipulation<CropConfig> = async (state, config) => {
  const { width, height, x, y, percent } = config;
  return state.crop(width, height, x, y, percent);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CROP, Crop);
export default Crop;
