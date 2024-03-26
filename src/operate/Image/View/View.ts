import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ViewConfig } from './types';

/**
 * 表示パラメータ指定
 *
 * FlashPix表示パラメータ指定。
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
