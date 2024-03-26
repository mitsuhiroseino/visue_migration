import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ConvolveConfig } from './types';

/**
 * 畳み込み
 *
 * 画像に畳み込みフィルタを適用することができる。畳み込みフィルタを使用することで、画像の特徴を強調したり、ノイズを除去したりすることができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-convolve
 *
 * @param state gmのインスタンス(ステート)
 * @param config Convolveのコンフィグ
 * @returns gmのインスタンス
 */
const Convolve: ImageManipulation<ConvolveConfig> = async (state, config) => {
  const { kernel } = config;
  return state.convolve(kernel);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.CONVOLVE, Convolve);
export default Convolve;
