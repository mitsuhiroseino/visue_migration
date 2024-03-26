import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { TextFontConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config TextFontのコンフィグ
 * @returns gmのインスタンス
 */
const TextFont: ImageManipulation<TextFontConfig> = async (state, config) => {
  const { font } = config;
  return state.textFont(font);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.TEXT_FONT, TextFont);
export default TextFont;
