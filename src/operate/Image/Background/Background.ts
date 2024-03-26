import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BackgroundConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Backgroundのコンフィグ
 * @returns gmのインスタンス
 */
const Background: ImageManipulation<BackgroundConfig> = async (state, config) => {
  const { color } = config;
  return state.background(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BACKGROUND, Background);
export default Background;
