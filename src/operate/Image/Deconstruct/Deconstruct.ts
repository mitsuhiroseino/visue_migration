import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { DeconstructConfig } from './types';

/**
 * 分解
 *
 * 画像の色を成分ごとに分解することができる。RGBやCMYKなどの成分を個別に操作するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-deconstruct
 *
 * @param state gmのインスタンス(ステート)
 * @param config Deconstructのコンフィグ
 * @returns gmのインスタンス
 */
const Deconstruct: ImageManipulation<DeconstructConfig> = async (state, config) => {
  const {} = config;
  return state.deconstruct();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.DECONSTRUCT, Deconstruct);
export default Deconstruct;
