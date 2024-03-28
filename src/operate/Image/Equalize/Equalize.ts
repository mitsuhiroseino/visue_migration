import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { EqualizeConfig } from './types';

/**
 * ヒストグラム均等化
 *
 * 画像のヒストグラムを均等化することができる。ヒストグラム均等化により、画像のコントラストを向上させることができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-equalize
 *
 * @param state gmのインスタンス(ステート)
 * @param config Equalizeのコンフィグ
 * @returns gmのインスタンス
 */
const Equalize: ImageManipulation<EqualizeConfig> = (state, config) => {
  const {} = config;
  return state.equalize();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.EQUALIZE, Equalize);
export default Equalize;
