import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TypeConfig } from './types';

/**
 * タイプ
 *
 * 2値、グレースケール、パレット、トゥルーカラー、トゥルーカラー+アルファなどを指定。
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
