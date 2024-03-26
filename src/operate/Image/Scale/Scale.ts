import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ScaleConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Scaleのコンフィグ
 * @returns gmのインスタンス
 */
const Scale: ImageManipulation<ScaleConfig> = async (state, config) => {
  const { width, height } = config;
  return state.scale(width, height);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SCALE, Scale);
export default Scale;
