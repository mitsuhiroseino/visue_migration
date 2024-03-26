import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TitleConfig } from './types';

/**
 * タイトル
 *
 * タイトルを設定することができる。画像や動画にタイトルを追加する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-title
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
