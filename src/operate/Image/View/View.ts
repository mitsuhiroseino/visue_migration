import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ViewConfig } from './types';

/**
 * ビュー
 *
 * 画像のビュー情報を取得することができる。画像のビューのサイズや位置などの情報を取得する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-view
 *
 * @param state gmのインスタンス(ステート)
 * @param config Viewのコンフィグ
 * @returns gmのインスタンス
 */
const View: ImageManipulation<ViewConfig> = async (state, config) => {
  const {} = config;
  return state.view();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.VIEW, View);
export default View;
