import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TypeConfig } from './types';

/**
 * タイプ
 *
 * 画像のタイプや形式を取得することができる。画像のファイル形式や MIME タイプを調べる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-type
 *
 * @param state gmのインスタンス(ステート)
 * @param config Typeのコンフィグ
 * @returns gmのインスタンス
 */
const Type: ImageManipulation<TypeConfig> = async (state, config) => {
  const { imageType } = config;
  return state.type(imageType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TYPE, Type);
export default Type;
