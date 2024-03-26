import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ExtentConfig } from './types';

/**
 * サイズ変更
 *
 * 画像のサイズを変更することができる。指定されたサイズにリサイズするか、余白を追加してサイズを変更する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-extent
 *
 * @param state gmのインスタンス(ステート)
 * @param config Extentのコンフィグ
 * @returns gmのインスタンス
 */
const Extent: ImageManipulation<ExtentConfig> = async (state, config) => {
  const { width, height, options } = config;
  return state.extent(width, height, options);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EXTENT, Extent);
export default Extent;
