import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SolarizeConfig } from './types';

/**
 * ソラライズ
 *
 * しきい値レベルを超えるすべてのピクセルを無効にする。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-solarize
 *
 * @param state gmのインスタンス(ステート)
 * @param config Solarizeのコンフィグ
 * @returns gmのインスタンス
 */
const Solarize: ImageManipulation<SolarizeConfig> = (state, config) => {
  const { threshold } = config;
  return state.solarize(threshold);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SOLARIZE, Solarize);
export default Solarize;
