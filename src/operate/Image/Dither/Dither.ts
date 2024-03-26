import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DitherConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Ditherのコンフィグ
 * @returns gmのインスタンス
 */
const Dither: ImageManipulation<DitherConfig> = async (state, config) => {
  const { enable } = config;
  return state.dither(enable);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DITHER, Dither);
export default Dither;
