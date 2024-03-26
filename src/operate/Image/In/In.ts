import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { InConfig } from './types';

/**
 * 入力
 *
 * 入力画像を設定することができる。処理の対象となる入力画像を指定する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-in
 *
 * @param state gmのインスタンス(ステート)
 * @param config Inのコンフィグ
 * @returns gmのインスタンス
 */
const In: ImageManipulation<InConfig> = async (state, config) => {
  const { customArguments } = config;
  return state.in(...customArguments);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.IN, In);
export default In;
