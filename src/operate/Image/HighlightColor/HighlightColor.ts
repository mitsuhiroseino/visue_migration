import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { HighlightColorConfig } from './types';

/**
 * ハイライトの色
 *
 * 画像のハイライト色を指定することができる。ハイライトの色や強度を調整するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-highlightColor
 *
 * @param state gmのインスタンス(ステート)
 * @param config HighlightColorのコンフィグ
 * @returns gmのインスタンス
 */
const HighlightColor: ImageManipulation<HighlightColorConfig> = async (state, config) => {
  const { color } = config;
  return state.highlightColor(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.HIGHLIGHT_COLOR, HighlightColor);
export default HighlightColor;
