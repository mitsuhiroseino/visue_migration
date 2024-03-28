import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { AdjoinConfig } from './types';

/**
 * 画像の結合
 *
 * 複数の画像を一つの画像に結合することができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-adjoin
 *
 * @param state gmのインスタンス(ステート)
 * @param config Adjoinのコンフィグ
 * @returns gmのインスタンス
 */
const Adjoin: ImageManipulation<AdjoinConfig> = (state, config) => {
  const {} = config;
  return state.adjoin();
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.ADJOIN, Adjoin);
export default Adjoin;
