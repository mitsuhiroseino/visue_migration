import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { GammaConfig } from './types';

/**
 * ガンマ
 *
 * 画像のガンマ補正を行うことができる。画像の明るさやコントラストを調整するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-gamma
 *
 * @param state gmのインスタンス(ステート)
 * @param config Gammaのコンフィグ
 * @returns gmのインスタンス
 */
const Gamma: ImageManipulation<GammaConfig> = async (state, config) => {
  const { r, g, b } = config;
  return state.gamma(r, g, b);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GAMMA, Gamma);
export default Gamma;
