import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ShadeConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Shadeのコンフィグ
 * @returns gmのインスタンス
 */
const Shade: ImageManipulation<ShadeConfig> = async (state, config) => {
  const { azimuth, elevation } = config;
  return state.shade(azimuth, elevation);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SHADE, Shade);
export default Shade;
