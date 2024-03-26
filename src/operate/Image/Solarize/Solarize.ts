import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SolarizeConfig } from './types';

/**
 * ソラライズ
 *
 * 画像をソラリゼーションさせることができる。画像の一部分をネガポジ反転させ、劇的な効果を与える。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-solarize
 *
 * @param state gmのインスタンス(ステート)
 * @param config Solarizeのコンフィグ
 * @returns gmのインスタンス
 */
const Solarize: ImageManipulation<SolarizeConfig> = async (state, config) => {
  const { threshold } = config;
  return state.solarize(threshold);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SOLARIZE, Solarize);
export default Solarize;
