import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SharpenConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Sharpenのコンフィグ
 * @returns gmのインスタンス
 */
const Sharpen: ImageManipulation<SharpenConfig> = async (state, config) => {
  const { radius, sigma } = config;
  return state.sharpen(radius, sigma);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SHARPEN, Sharpen);
export default Sharpen;
