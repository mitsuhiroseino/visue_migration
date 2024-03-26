import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TransparentConfig } from './types';

/**
 * 透明化
 *
 * 指定した色を透明化し、画像の一部を透明にする。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-transparent
 *
 * @param state gmのインスタンス(ステート)
 * @param config Transparentのコンフィグ
 * @returns gmのインスタンス
 */
const Transparent: ImageManipulation<TransparentConfig> = async (state, config) => {
  const { color } = config;
  return state.transparent(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TRANSPARENT, Transparent);
export default Transparent;
