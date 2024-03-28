import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { HighlightStyleConfig } from './types';

/**
 * ハイライトのスタイル
 *
 * 画像のハイライトのスタイルを指定することができる。ハイライトのスタイルや効果を変更するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-highlightStyle
 *
 * @param state gmのインスタンス(ステート)
 * @param config HighlightStyleのコンフィグ
 * @returns gmのインスタンス
 */
const HighlightStyle: ImageManipulation<HighlightStyleConfig> = (state, config) => {
  const { style } = config;
  return state.highlightStyle(style);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.HIGHLIGHT_STYLE, HighlightStyle);
export default HighlightStyle;
