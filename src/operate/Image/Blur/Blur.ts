import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BlurConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Blurのコンフィグ
 * @returns gmのインスタンス
 */
const Blur: ImageManipulation<BlurConfig> = async (state, config) => {
  const { radius, sigma } = config;
  return state.blur(radius, sigma);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BLUR, Blur);
export default Blur;
