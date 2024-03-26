import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EncodingConfig } from './types';

/**
 * エンコーディング指定
 *
 * 画像のエンコード方法や形式を指定することができる。画像のファイル形式や圧縮方法を設定するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-encoding
 *
 * @param state gmのインスタンス(ステート)
 * @param config Encodingのコンフィグ
 * @returns gmのインスタンス
 */
const Encoding: ImageManipulation<EncodingConfig> = async (state, config) => {
  const { encoding } = config;
  return state.encoding(encoding);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ENCODING, Encoding);
export default Encoding;
