import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { HighlightStyleConfig } from './types';

/**
 *
 * @param state gmのインスタンス(ステート)
 * @param config HighlightStyleのコンフィグ
 * @returns gmのインスタンス
 */
const HighlightStyle: ImageManipulation<HighlightStyleConfig> = async (state, config) => {
  const { style } = config;
  return state.highlightStyle(style);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.HIGHLIGHT_STYLE, HighlightStyle);
export default HighlightStyle;
