import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MotionBlurConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config MotionBlurのコンフィグ
 * @returns gmのインスタンス
 */
const MotionBlur: ImageManipulation<MotionBlurConfig> = async (state, config) => {
  const { radius, sigma, angle } = config;
  return state.motionBlur(radius, sigma, angle);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MOTION_BLUR, MotionBlur);
export default MotionBlur;
