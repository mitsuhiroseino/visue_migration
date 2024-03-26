import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { RaiseConfig } from './types';

/**
 * 浮き出し
 *
 * 画像に浮き出し効果を追加することができる。指定した方向や程度で、画像の輪郭を浮き出し状にする。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-raise
 *
 * @param state gmのインスタンス(ステート)
 * @param config Raiseのコンフィグ
 * @returns gmのインスタンス
 */
const Raise: ImageManipulation<RaiseConfig> = async (state, config) => {
  const { width, height } = config;
  return state.raise(width, height);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.RAISE, Raise);
export default Raise;
