import ImageManipulationFactory from '../ImageManipulationFactory';
import { IMAGE_MANIPULATION_TYPE } from '../constants';
import { ImageManipulation } from '../types';
import { BorderColorConfig } from './types';

/**
 * 境界線色
 *
 * 境界線の色を設定することができる。境界線の色は、画像に追加されるフレームの色を指定するのに使用される。
 *
 * http://www.graphicsmagick.org/GraphicsMagick.html#details-borderColor
 *
 * @param state gmのインスタンス(ステート)
 * @param config BorderColorのコンフィグ
 * @returns gmのインスタンス
 */
const BorderColor: ImageManipulation<BorderColorConfig> = async (state, config) => {
  const { color } = config;
  return state.borderColor(color);
};
ImageManipulationFactory.register(IMAGE_MANIPULATION_TYPE.BORDER_COLOR, BorderColor);
export default BorderColor;
