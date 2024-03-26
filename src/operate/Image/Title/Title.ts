import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TitleConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Titleのコンフィグ
 * @returns gmのインスタンス
 */
const Title: ImageManipulation<TitleConfig> = async (state, config) => {
  const { title } = config;
  return state.title(title);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TITLE, Title);
export default Title;
