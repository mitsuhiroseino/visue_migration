import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MagnifyConfig } from './types';

/**
 * 拡大
 *
 * 画像を拡大することができる。画像のサイズを拡大して、詳細な部分を表示するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-magnify
 *
 * @param state gmのインスタンス(ステート)
 * @param config Magnifyのコンフィグ
 * @returns gmのインスタンス
 */
const Magnify: ImageManipulation<MagnifyConfig> = async (state, config) => {
  const { factor } = config;
  return state.magnify(factor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MAGNIFY, Magnify);
export default Magnify;
