import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { GaussianConfig } from './types';

/**
 * ガウシアン
 *
 * 画像にガウシアンぼかしを適用することができる。ガウシアンぼかしは、画像のエッジを滑らかにするのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-gaussian
 *
 * @param state gmのインスタンス(ステート)
 * @param config Gaussianのコンフィグ
 * @returns gmのインスタンス
 */
const Gaussian: ImageManipulation<GaussianConfig> = async (state, config) => {
  const { radius, sigma } = config;
  return state.gaussian(radius, sigma);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.GAUSSIAN, Gaussian);
export default Gaussian;
