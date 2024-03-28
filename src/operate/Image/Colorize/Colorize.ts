import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ColorizeConfig } from './types';

/**
 * 着色
 *
 * 画像に色を付けることができる。画像全体または指定された領域に色を塗ることができる。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-colorize
 *
 * @param state gmのインスタンス(ステート)
 * @param config Colorizeのコンフィグ
 * @returns gmのインスタンス
 */
const Colorize: ImageManipulation<ColorizeConfig> = (state, config) => {
  const { red, green, blue } = config;
  return state.colorize(red, green, blue);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COLORIZE, Colorize);
export default Colorize;
