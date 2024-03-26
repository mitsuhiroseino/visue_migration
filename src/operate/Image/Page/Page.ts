import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { PageConfig } from './types';

/**
 * ページ
 *
 * 画像のページサイズや配置を設定することができる。印刷やレイアウトの際に使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-page
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
