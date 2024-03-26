import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { ColorMapConfig } from './types';

/**
 * カラーマップ
 *
 * 画像の色をマッピングすることができる。指定されたカラーマップに基づいて、画像の色を変換する。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-colorMap
 *
 * @param state gmのインスタンス(ステート)
 * @param config ColorMapのコンフィグ
 * @returns gmのインスタンス
 */
const ColorMap: ImageManipulation<ColorMapConfig> = async (state, config) => {
  const { colorMapType } = config;
  return state.colorMap(colorMapType);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.COLOR_MAP, ColorMap);
export default ColorMap;
