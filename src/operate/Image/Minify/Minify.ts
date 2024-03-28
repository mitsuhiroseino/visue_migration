import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MinifyConfig } from './types';

/**
 * 縮小
 *
 * 画像を縮小することができる。画像のサイズを縮小して、ファイルサイズを減らすことができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-minify
 *
 * @param state gmのインスタンス(ステート)
 * @param config Minifyのコンフィグ
 * @returns gmのインスタンス
 */
const Minify: ImageManipulation<MinifyConfig> = (state, config) => {
  const { factor } = config;
  return state.minify(factor);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MINIFY, Minify);
export default Minify;
