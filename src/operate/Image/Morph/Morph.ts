import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { MorphConfig } from './types';

/**
 * モーフィング
 *
 * 画像間のモーフィングを行うことができる。複数の画像間で形状や特徴を変化させるのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-morph
 *
 * @param state gmのインスタンス(ステート)
 * @param config Morphのコンフィグ
 * @returns gmのインスタンス
 */
const Morph: ImageManipulation<MorphConfig> = async (state, config) => {
  const { otherImg, outName, callback } = config;
  return state.morph(otherImg, outName, callback);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.MORPH, Morph);
export default Morph;
