import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { CompressConfig } from './types';

/**
 * 圧縮
 *
 * 画像を圧縮することができる。圧縮率や圧縮形式を指定して、画像ファイルのサイズを減らすことができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-compress
 *
 * @param state gmのインスタンス(ステート)
 * @param config Compressのコンフィグ
 * @returns gmのインスタンス
 */
const Compress: ImageManipulation<CompressConfig> = async (state, config) => {
  const { compressionType } = config;
  return state.compress(compressionType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COMPRESS, Compress);
export default Compress;
