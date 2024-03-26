import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PageConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config Pageのコンフィグ
 * @returns gmのインスタンス
 */
const Page: ImageManipulation<PageConfig> = async (state, config) => {
  const { width, height, arg } = config;
  return state.page(width, height, arg);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.PAGE, Page);
export default Page;
