import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { SwirlConfig } from './types';

/**
 * 渦巻き
 *
 * 画像を渦巻状に歪ませることができる。指定した中心点を中心に画像を渦巻き状に回転させる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-swirl
 *
 * @param state gmのインスタンス(ステート)
 * @param config Swirlのコンフィグ
 * @returns gmのインスタンス
 */
const Swirl: ImageManipulation<SwirlConfig> = (state, config) => {
  const { degrees } = config;
  return state.swirl(degrees);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.SWIRL, Swirl);
export default Swirl;
